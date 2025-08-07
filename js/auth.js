// DEMO AUTH SYSTEM (Frontend-only mock)
const demoUsers = [
  {
    matric: "2023/123456",
    password: "unn123", 
    name: "Onyekachi Eze",
    department: "Computer Science",
    level: "300",
    role: "student"
  },
  {
    staffId: "STAFF001",
    password: "admin123",
    name: "Admin User",
    department: "Registry",
    role: "admin"
  }
];

// Handle login form submission
function handleLogin() {
  const matric = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  
  // Find user (check both matric and staffId)
  const user = demoUsers.find(u => 
    (u.matric === matric || u.staffId === matric) && 
    u.password === password
  );

  if (user) {
    // Save to localStorage
    localStorage.setItem('currentUser', JSON.stringify(user));
    
    // Redirect
    if (user.role === 'admin') {
      window.location.href = "../admin-portal/dashboard.html"; 
    } else {
      window.location.href = "dashboard.html";
    }
  } else {
    alert("Invalid credentials. Try:\nStudent: 2023/123456 / unn123\nAdmin: STAFF001 / admin123");
  }
}

// Check if user is logged in (for protected pages)
function checkAuth() {
  const user = JSON.parse(localStorage.getItem('currentUser'));
  if (!user) window.location.href = "index.html";
  return user;
}

// Logout
function logout() {
  localStorage.removeItem('currentUser');
  window.location.href = "index.html";
}

// Auto-check auth on dashboard pages
document.addEventListener('DOMContentLoaded', function() {
  if (window.location.pathname.includes('dashboard.html')) {
    const user = checkAuth();
    if (user) {
      // Display user info
      document.getElementById('studentName').textContent = user.name;
      document.getElementById('userAvatar').textContent = 
        user.name.split(' ').map(n => n[0]).join('');
    }
  }
});