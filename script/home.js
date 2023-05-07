function handleDashboardClick() {
    window.location.href = '/dashboard.html'
}
function handleLeaderBoardClick() {
    window.location.href = '/leaderboard.html'
}
function handleToggleMenu(){
    const toggleBtn =  document.getElementById('toggle-menu')
    toggleBtn.style.display = 'unset'
}
function handleToggle  () {
    const toggleBtn = document.getElementById('toggle-menu')
    toggleBtn.style.display = 'none'
}