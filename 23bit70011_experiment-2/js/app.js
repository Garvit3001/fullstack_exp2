// Material UI Components
const {
    AppBar, Toolbar, Typography, Button, Container, Grid, Card, CardContent,
    Box, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText,
    ListItemButton, ThemeProvider, createTheme, CssBaseline, Switch,
    Paper, Divider, Avatar, Chip, useMediaQuery, Stack, CardActions,
    CardMedia, Fab
} = MaterialUI;

// React
const { useState, useMemo } = React;

// ===== LANDING PAGE (PART A) =====
function LandingPage({ onNavigate }) {
    return (
        <Box sx={{ flexGrow: 1, bgcolor: 'background.default' }}>
            {/* Navigation Bar */}
            <AppBar position="static" elevation={0}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 700 }}>
                        MyBrand
                    </Typography>
                    <Button color="inherit" onClick={() => onNavigate('landing')}>Home</Button>
                    <Button color="inherit" onClick={() => onNavigate('dashboard')}>Dashboard</Button>
                    <Button color="inherit" onClick={() => onNavigate('admin')}>Admin</Button>
                </Toolbar>
            </AppBar>

            {/* Hero Section */}
            <Box
                sx={{
                    bgcolor: 'primary.main',
                    color: 'white',
                    py: { xs: 8, md: 12 },
                    minHeight: { xs: '60vh', md: '70vh' },
                    display: 'flex',
                    alignItems: 'center'
                }}
            >
                <Container maxWidth="lg">
                    <Grid container spacing={4} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <Typography
                                variant="h2"
                                component="h1"
                                gutterBottom
                                sx={{
                                    fontWeight: 700,
                                    fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' }
                                }}
                            >
                                Build Amazing Products
                            </Typography>
                            <Typography
                                variant="h5"
                                paragraph
                                sx={{
                                    mb: 4,
                                    opacity: 0.9,
                                    fontSize: { xs: '1.1rem', md: '1.5rem' }
                                }}
                            >
                                Create beautiful, responsive interfaces with Material UI. Fast, accessible, and production-ready.
                            </Typography>
                            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                                <Button
                                    variant="contained"
                                    size="large"
                                    sx={{
                                        bgcolor: 'white',
                                        color: 'primary.main',
                                        '&:hover': { bgcolor: 'grey.100' },
                                        py: 1.5,
                                        px: 4
                                    }}
                                >
                                    Get Started
                                </Button>
                                <Button
                                    variant="outlined"
                                    size="large"
                                    sx={{
                                        borderColor: 'white',
                                        color: 'white',
                                        '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.1)' },
                                        py: 1.5,
                                        px: 4
                                    }}
                                >
                                    Learn More
                                </Button>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box
                                sx={{
                                    bgcolor: 'rgba(255,255,255,0.1)',
                                    borderRadius: 2,
                                    p: 4,
                                    textAlign: 'center',
                                    backdropFilter: 'blur(10px)'
                                }}
                            >
                                <Typography variant="h3" sx={{ mb: 2 }}>🚀</Typography>
                                <Typography variant="h5">
                                    Responsive Design
                                </Typography>
                                <Typography sx={{ mt: 2, opacity: 0.9 }}>
                                    Works perfectly on all devices
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Features Section */}
            <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
                <Typography
                    variant="h3"
                    component="h2"
                    align="center"
                    gutterBottom
                    sx={{
                        fontWeight: 700,
                        mb: 2,
                        fontSize: { xs: '2rem', md: '3rem' }
                    }}
                >
                    Why Choose Us
                </Typography>
                <Typography
                    variant="h6"
                    align="center"
                    color="text.secondary"
                    paragraph
                    sx={{ mb: 6, fontSize: { xs: '1rem', md: '1.25rem' } }}
                >
                    Everything you need to build modern web applications
                </Typography>

                <Grid container spacing={4}>
                    {[
                        {
                            icon: '⚡',
                            title: 'Lightning Fast',
                            description: 'Optimized performance with lazy loading and code splitting for blazing fast load times.'
                        },
                        {
                            icon: '📱',
                            title: 'Fully Responsive',
                            description: 'Beautiful layouts that adapt seamlessly to any screen size, from mobile to desktop.'
                        },
                        {
                            icon: '🎨',
                            title: 'Customizable',
                            description: 'Extensive theming system with light/dark mode support and custom component styling.'
                        },
                        {
                            icon: '♿',
                            title: 'Accessible',
                            description: 'WCAG compliant components with proper ARIA attributes and keyboard navigation.'
                        },
                        {
                            icon: '🔧',
                            title: 'Developer Friendly',
                            description: 'Clean API with comprehensive documentation and TypeScript support out of the box.'
                        },
                        {
                            icon: '🌍',
                            title: 'Global Ready',
                            description: 'Built-in internationalization support with RTL languages and localization features.'
                        }
                    ].map((feature, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card
                                sx={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-8px)',
                                        boxShadow: 6
                                    }
                                }}
                            >
                                <CardContent sx={{ flexGrow: 1, textAlign: 'center', p: 4 }}>
                                    <Typography variant="h2" sx={{ mb: 2 }}>
                                        {feature.icon}
                                    </Typography>
                                    <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                                        {feature.title}
                                    </Typography>
                                    <Typography color="text.secondary">
                                        {feature.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Call to Action Section */}
            <Box
                sx={{
                    bgcolor: 'grey.100',
                    py: { xs: 6, md: 10 }
                }}
            >
                <Container maxWidth="md">
                    <Paper
                        elevation={3}
                        sx={{
                            p: { xs: 4, md: 6 },
                            textAlign: 'center',
                            borderRadius: 3
                        }}
                    >
                        <Typography
                            variant="h3"
                            component="h2"
                            gutterBottom
                            sx={{
                                fontWeight: 700,
                                fontSize: { xs: '1.75rem', md: '2.5rem' }
                            }}
                        >
                            Ready to Get Started?
                        </Typography>
                        <Typography
                            variant="h6"
                            color="text.secondary"
                            paragraph
                            sx={{ mb: 4, fontSize: { xs: '1rem', md: '1.25rem' } }}
                        >
                            Join thousands of developers building amazing products with our platform
                        </Typography>
                        <Stack
                            direction={{ xs: 'column', sm: 'row' }}
                            spacing={2}
                            justifyContent="center"
                        >
                            <Button
                                variant="contained"
                                size="large"
                                sx={{ py: 1.5, px: 5 }}
                            >
                                Start Free Trial
                            </Button>
                            <Button
                                variant="outlined"
                                size="large"
                                sx={{ py: 1.5, px: 5 }}
                            >
                                View Pricing
                            </Button>
                        </Stack>
                    </Paper>
                </Container>
            </Box>

            {/* Footer */}
            <Box
                sx={{
                    bgcolor: 'grey.900',
                    color: 'white',
                    py: 4
                }}
            >
                <Container maxWidth="lg">
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={6} md={3}>
                            <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
                                MyBrand
                            </Typography>
                            <Typography variant="body2" sx={{ opacity: 0.8 }}>
                                Building the future of web development
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Typography variant="h6" gutterBottom>
                                Product
                            </Typography>
                            <Stack spacing={1}>
                                <Typography variant="body2" sx={{ opacity: 0.8, cursor: 'pointer' }}>Features</Typography>
                                <Typography variant="body2" sx={{ opacity: 0.8, cursor: 'pointer' }}>Pricing</Typography>
                                <Typography variant="body2" sx={{ opacity: 0.8, cursor: 'pointer' }}>Documentation</Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Typography variant="h6" gutterBottom>
                                Company
                            </Typography>
                            <Stack spacing={1}>
                                <Typography variant="body2" sx={{ opacity: 0.8, cursor: 'pointer' }}>About</Typography>
                                <Typography variant="body2" sx={{ opacity: 0.8, cursor: 'pointer' }}>Blog</Typography>
                                <Typography variant="body2" sx={{ opacity: 0.8, cursor: 'pointer' }}>Careers</Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Typography variant="h6" gutterBottom>
                                Legal
                            </Typography>
                            <Stack spacing={1}>
                                <Typography variant="body2" sx={{ opacity: 0.8, cursor: 'pointer' }}>Privacy</Typography>
                                <Typography variant="body2" sx={{ opacity: 0.8, cursor: 'pointer' }}>Terms</Typography>
                                <Typography variant="body2" sx={{ opacity: 0.8, cursor: 'pointer' }}>Contact</Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                    <Divider sx={{ my: 3, bgcolor: 'rgba(255,255,255,0.1)' }} />
                    <Typography variant="body2" align="center" sx={{ opacity: 0.8 }}>
                        © 2024 MyBrand. All rights reserved.
                    </Typography>
                </Container>
            </Box>
        </Box>
    );
}

// ===== DASHBOARD LAYOUT (PART B) =====
function DashboardLayout({ onNavigate }) {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const isMobile = useMediaQuery('(max-width:900px)');

    const drawerWidth = 240;

    const menuItems = [
        { text: 'Dashboard', icon: '📊' },
        { text: 'Analytics', icon: '📈' },
        { text: 'Users', icon: '👥' },
        { text: 'Products', icon: '📦' },
        { text: 'Orders', icon: '🛒' },
        { text: 'Settings', icon: '⚙️' }
    ];

    const stats = [
        { title: 'Total Revenue', value: '$45,231', change: '+12.5%', color: '#1976d2' },
        { title: 'Active Users', value: '2,345', change: '+8.2%', color: '#2e7d32' },
        { title: 'Orders', value: '1,234', change: '+23.1%', color: '#ed6c02' },
        { title: 'Conversion Rate', value: '3.24%', change: '+2.4%', color: '#9c27b0' },
        { title: 'Avg Order Value', value: '$89.50', change: '+5.7%', color: '#d32f2f' },
        { title: 'New Customers', value: '432', change: '+15.3%', color: '#0288d1' },
        { title: 'Product Views', value: '12.5K', change: '+18.9%', color: '#f57c00' },
        { title: 'Cart Additions', value: '856', change: '+9.6%', color: '#7b1fa2' }
    ];

    const drawer = (
        <Box>
            <Toolbar>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    Dashboard
                </Typography>
            </Toolbar>
            <Divider />
            <List>
                {menuItems.map((item, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <Typography variant="h6">{item.icon}</Typography>
                            </ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Box sx={{ display: 'flex', minHeight: '100vh' }}>
            {/* Top App Bar */}
            <AppBar
                position="fixed"
                sx={{
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        edge="start"
                        onClick={() => setDrawerOpen(!drawerOpen)}
                        sx={{ mr: 2 }}
                    >
                        <span className="material-icons">menu</span>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 700 }}>
                        MyDashboard
                    </Typography>
                    <Button color="inherit" onClick={() => onNavigate('landing')}>Landing</Button>
                    <Button color="inherit" onClick={() => onNavigate('admin')}>Admin</Button>
                    <IconButton color="inherit">
                        <span className="material-icons">notifications</span>
                    </IconButton>
                    <IconButton color="inherit">
                        <span className="material-icons">account_circle</span>
                    </IconButton>
                </Toolbar>
            </AppBar>

            {/* Sidebar Drawer */}
            <Drawer
                variant={isMobile ? 'temporary' : 'permanent'}
                open={isMobile ? drawerOpen : true}
                onClose={() => setDrawerOpen(false)}
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
            >
                {drawer}
            </Drawer>

            {/* Main Content */}
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    bgcolor: 'background.default',
                    p: 3,
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { xs: 0, md: isMobile ? 0 : 0 }
                }}
            >
                <Toolbar />
                
                <Container maxWidth="xl">
                    <Typography variant="h4" sx={{ mb: 1, fontWeight: 700 }}>
                        Welcome back! 👋
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                        Here's what's happening with your business today
                    </Typography>

                    {/* Stats Grid - Responsive */}
                    <Grid container spacing={3}>
                        {stats.map((stat, index) => (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                                <Card
                                    sx={{
                                        height: '100%',
                                        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                                        '&:hover': {
                                            transform: 'translateY(-4px)',
                                            boxShadow: 4
                                        }
                                    }}
                                >
                                    <CardContent>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                            <Box>
                                                <Typography color="text.secondary" variant="body2" gutterBottom>
                                                    {stat.title}
                                                </Typography>
                                                <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                                                    {stat.value}
                                                </Typography>
                                                <Chip
                                                    label={stat.change}
                                                    size="small"
                                                    sx={{
                                                        bgcolor: stat.change.startsWith('+') ? 'success.light' : 'error.light',
                                                        color: stat.change.startsWith('+') ? 'success.dark' : 'error.dark',
                                                        fontWeight: 600
                                                    }}
                                                />
                                            </Box>
                                            <Box
                                                sx={{
                                                    width: 48,
                                                    height: 48,
                                                    borderRadius: 2,
                                                    bgcolor: stat.color,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    color: 'white',
                                                    fontSize: '24px'
                                                }}
                                            >
                                                📊
                                            </Box>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>

                    {/* Additional Dashboard Sections */}
                    <Grid container spacing={3} sx={{ mt: 2 }}>
                        <Grid item xs={12} md={8}>
                            <Card sx={{ height: 400 }}>
                                <CardContent>
                                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                                        Revenue Chart
                                    </Typography>
                                    <Box sx={{
                                        height: 320,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        bgcolor: 'grey.50',
                                        borderRadius: 1
                                    }}>
                                        <Typography color="text.secondary">
                                            Chart visualization would go here
                                        </Typography>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Card sx={{ height: 400 }}>
                                <CardContent>
                                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                                        Recent Activity
                                    </Typography>
                                    <Stack spacing={2} sx={{ mt: 2 }}>
                                        {['New order received', 'User registration', 'Payment processed', 'Product updated'].map((activity, i) => (
                                            <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                                <Avatar sx={{ width: 32, height: 32, bgcolor: 'primary.main' }}>
                                                    {i + 1}
                                                </Avatar>
                                                <Box>
                                                    <Typography variant="body2">{activity}</Typography>
                                                    <Typography variant="caption" color="text.secondary">
                                                        {i + 2} minutes ago
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        ))}
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
}

// ===== ADMIN PANEL WITH THEME SWITCHING (PART C) =====
function AdminPanel({ onNavigate }) {
    const [darkMode, setDarkMode] = useState(false);

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode: darkMode ? 'dark' : 'light',
                    primary: {
                        main: darkMode ? '#90caf9' : '#1976d2',
                    },
                    secondary: {
                        main: darkMode ? '#f48fb1' : '#dc004e',
                    },
                    background: {
                        default: darkMode ? '#121212' : '#f5f5f5',
                        paper: darkMode ? '#1e1e1e' : '#ffffff',
                    },
                },
                components: {
                    MuiButton: {
                        styleOverrides: {
                            root: {
                                borderRadius: 8,
                                textTransform: 'none',
                                fontWeight: 600,
                                padding: '10px 24px',
                            },
                            contained: {
                                boxShadow: darkMode 
                                    ? '0 4px 6px rgba(144, 202, 249, 0.25)'
                                    : '0 4px 6px rgba(25, 118, 210, 0.25)',
                                '&:hover': {
                                    boxShadow: darkMode
                                        ? '0 6px 12px rgba(144, 202, 249, 0.35)'
                                        : '0 6px 12px rgba(25, 118, 210, 0.35)',
                                },
                            },
                        },
                    },
                    MuiCard: {
                        styleOverrides: {
                            root: {
                                borderRadius: 12,
                                boxShadow: darkMode
                                    ? '0 4px 12px rgba(0, 0, 0, 0.5)'
                                    : '0 4px 12px rgba(0, 0, 0, 0.1)',
                            },
                        },
                    },
                    MuiAppBar: {
                        styleOverrides: {
                            root: {
                                boxShadow: darkMode
                                    ? '0 2px 8px rgba(0, 0, 0, 0.5)'
                                    : '0 2px 8px rgba(0, 0, 0, 0.1)',
                            },
                        },
                    },
                },
                typography: {
                    fontFamily: 'Roboto, sans-serif',
                    h4: {
                        fontWeight: 700,
                    },
                    h6: {
                        fontWeight: 600,
                    },
                },
            }),
        [darkMode]
    );

    const adminStats = [
        { title: 'Total Users', value: '8,456', icon: '👥', color: '#1976d2' },
        { title: 'Active Sessions', value: '342', icon: '🔐', color: '#2e7d32' },
        { title: 'Server Status', value: 'Online', icon: '💻', color: '#ed6c02' },
        { title: 'Database Size', value: '24.5 GB', icon: '💾', color: '#9c27b0' },
    ];

    const recentUsers = [
        { name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
        { name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active' },
        { name: 'Bob Johnson', email: 'bob@example.com', role: 'Moderator', status: 'Inactive' },
        { name: 'Alice Williams', email: 'alice@example.com', role: 'User', status: 'Active' },
    ];

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
                {/* Header with Theme Toggle */}
                <AppBar position="static" color="primary">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 700 }}>
                            Admin Panel
                        </Typography>
                        <Button color="inherit" onClick={() => onNavigate('landing')}>Landing</Button>
                        <Button color="inherit" onClick={() => onNavigate('dashboard')}>Dashboard</Button>
                        <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
                            <span className="material-icons" style={{ marginRight: 8 }}>
                                {darkMode ? 'dark_mode' : 'light_mode'}
                            </span>
                            <Switch
                                checked={darkMode}
                                onChange={(e) => setDarkMode(e.target.checked)}
                                color="default"
                            />
                        </Box>
                    </Toolbar>
                </AppBar>

                <Container maxWidth="xl" sx={{ py: 4 }}>
                    {/* Welcome Section */}
                    <Box sx={{ mb: 4 }}>
                        <Typography variant="h4" gutterBottom>
                            System Administration
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            Manage your application, users, and system settings
                        </Typography>
                    </Box>

                    {/* Stats Cards */}
                    <Grid container spacing={3} sx={{ mb: 4 }}>
                        {adminStats.map((stat, index) => (
                            <Grid item xs={12} sm={6} md={3} key={index}>
                                <Card
                                    sx={{
                                        height: '100%',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-8px)',
                                            boxShadow: 8,
                                        },
                                    }}
                                >
                                    <CardContent>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <Box>
                                                <Typography color="text.secondary" variant="body2" gutterBottom>
                                                    {stat.title}
                                                </Typography>
                                                <Typography variant="h4" sx={{ fontWeight: 700 }}>
                                                    {stat.value}
                                                </Typography>
                                            </Box>
                                            <Box
                                                sx={{
                                                    width: 56,
                                                    height: 56,
                                                    borderRadius: 2,
                                                    bgcolor: stat.color,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    fontSize: '28px',
                                                }}
                                            >
                                                {stat.icon}
                                            </Box>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>

                    {/* Multi-Panel Layout */}
                    <Grid container spacing={3}>
                        {/* User Management Panel */}
                        <Grid item xs={12} lg={8}>
                            <Card>
                                <CardContent>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                                        <Typography variant="h6">
                                            Recent Users
                                        </Typography>
                                        <Button variant="contained" size="small">
                                            Add User
                                        </Button>
                                    </Box>
                                    <Box sx={{ overflowX: 'auto' }}>
                                        {recentUsers.map((user, index) => (
                                            <Box
                                                key={index}
                                                sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'space-between',
                                                    py: 2,
                                                    borderBottom: index < recentUsers.length - 1 ? '1px solid' : 'none',
                                                    borderColor: 'divider',
                                                    flexWrap: { xs: 'wrap', sm: 'nowrap' },
                                                }}
                                            >
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, minWidth: 0, flex: 1 }}>
                                                    <Avatar sx={{ bgcolor: 'primary.main' }}>
                                                        {user.name.charAt(0)}
                                                    </Avatar>
                                                    <Box sx={{ minWidth: 0 }}>
                                                        <Typography variant="body1" sx={{ fontWeight: 600 }}>
                                                            {user.name}
                                                        </Typography>
                                                        <Typography variant="body2" color="text.secondary" noWrap>
                                                            {user.email}
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                                <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', mt: { xs: 1, sm: 0 } }}>
                                                    <Chip
                                                        label={user.role}
                                                        size="small"
                                                        color="primary"
                                                        variant="outlined"
                                                    />
                                                    <Chip
                                                        label={user.status}
                                                        size="small"
                                                        color={user.status === 'Active' ? 'success' : 'default'}
                                                    />
                                                    <IconButton size="small">
                                                        <span className="material-icons" style={{ fontSize: 18 }}>edit</span>
                                                    </IconButton>
                                                    <IconButton size="small" color="error">
                                                        <span className="material-icons" style={{ fontSize: 18 }}>delete</span>
                                                    </IconButton>
                                                </Box>
                                            </Box>
                                        ))}
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>

                        {/* Quick Actions Panel */}
                        <Grid item xs={12} lg={4}>
                            <Stack spacing={3}>
                                <Card>
                                    <CardContent>
                                        <Typography variant="h6" gutterBottom>
                                            Quick Actions
                                        </Typography>
                                        <Stack spacing={2} sx={{ mt: 2 }}>
                                            <Button variant="contained" fullWidth startIcon={
                                                <span className="material-icons">person_add</span>
                                            }>
                                                Create User
                                            </Button>
                                            <Button variant="outlined" fullWidth startIcon={
                                                <span className="material-icons">settings</span>
                                            }>
                                                System Settings
                                            </Button>
                                            <Button variant="outlined" fullWidth startIcon={
                                                <span className="material-icons">backup</span>
                                            }>
                                                Backup Data
                                            </Button>
                                            <Button variant="outlined" fullWidth startIcon={
                                                <span className="material-icons">analytics</span>
                                            }>
                                                View Reports
                                            </Button>
                                        </Stack>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardContent>
                                        <Typography variant="h6" gutterBottom>
                                            System Health
                                        </Typography>
                                        <Stack spacing={2} sx={{ mt: 2 }}>
                                            <Box>
                                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                                    <Typography variant="body2">CPU Usage</Typography>
                                                    <Typography variant="body2" fontWeight={600}>45%</Typography>
                                                </Box>
                                                <Box sx={{ height: 8, bgcolor: 'grey.200', borderRadius: 1, overflow: 'hidden' }}>
                                                    <Box sx={{ width: '45%', height: '100%', bgcolor: 'success.main' }} />
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                                    <Typography variant="body2">Memory</Typography>
                                                    <Typography variant="body2" fontWeight={600}>67%</Typography>
                                                </Box>
                                                <Box sx={{ height: 8, bgcolor: 'grey.200', borderRadius: 1, overflow: 'hidden' }}>
                                                    <Box sx={{ width: '67%', height: '100%', bgcolor: 'warning.main' }} />
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                                    <Typography variant="body2">Storage</Typography>
                                                    <Typography variant="body2" fontWeight={600}>82%</Typography>
                                                </Box>
                                                <Box sx={{ height: 8, bgcolor: 'grey.200', borderRadius: 1, overflow: 'hidden' }}>
                                                    <Box sx={{ width: '82%', height: '100%', bgcolor: 'error.main' }} />
                                                </Box>
                                            </Box>
                                        </Stack>
                                    </CardContent>
                                </Card>
                            </Stack>
                        </Grid>

                        {/* Activity Log Panel */}
                        <Grid item xs={12}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h6" gutterBottom>
                                        Recent Activity Log
                                    </Typography>
                                    <Stack spacing={2} sx={{ mt: 2 }}>
                                        {[
                                            { action: 'User login', user: 'john@example.com', time: '2 minutes ago', type: 'success' },
                                            { action: 'Settings updated', user: 'admin@example.com', time: '15 minutes ago', type: 'info' },
                                            { action: 'Failed login attempt', user: 'unknown@example.com', time: '1 hour ago', type: 'error' },
                                            { action: 'New user registered', user: 'alice@example.com', time: '2 hours ago', type: 'success' },
                                        ].map((log, index) => (
                                            <Box
                                                key={index}
                                                sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: 2,
                                                    p: 2,
                                                    borderRadius: 2,
                                                    bgcolor: 'background.default',
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        width: 40,
                                                        height: 40,
                                                        borderRadius: '50%',
                                                        bgcolor: log.type === 'success' ? 'success.light' : 
                                                                 log.type === 'error' ? 'error.light' : 'info.light',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                    }}
                                                >
                                                    <span className="material-icons" style={{ fontSize: 20 }}>
                                                        {log.type === 'success' ? 'check_circle' : 
                                                         log.type === 'error' ? 'error' : 'info'}
                                                    </span>
                                                </Box>
                                                <Box sx={{ flex: 1 }}>
                                                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                                                        {log.action}
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                        {log.user}
                                                    </Typography>
                                                </Box>
                                                <Typography variant="caption" color="text.secondary">
                                                    {log.time}
                                                </Typography>
                                            </Box>
                                        ))}
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </ThemeProvider>
    );
}

// ===== MAIN APP =====
function App() {
    const [currentPage, setCurrentPage] = useState('landing');

    const renderPage = () => {
        switch (currentPage) {
            case 'landing':
                return <LandingPage onNavigate={setCurrentPage} />;
            case 'dashboard':
                return <DashboardLayout onNavigate={setCurrentPage} />;
            case 'admin':
                return <AdminPanel onNavigate={setCurrentPage} />;
            default:
                return <LandingPage onNavigate={setCurrentPage} />;
        }
    };

    return renderPage();
}

// Render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
