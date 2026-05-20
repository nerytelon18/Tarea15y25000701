<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>RAOULT'S MIST - App Galileo</title>
    
    <!-- Enlace al Manifiesto Web de la PWA -->
    <link rel="manifest" href="manifest.json">
    
    <!-- Configuración para iOS y Safari (Modo App Nativa) -->
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="apple-mobile-web-app-title" content="Raoult's Mist">
    <link rel="apple-touch-icon" href="https://static.wixstatic.com/media/ce35a6_6238472a58874e879580b1984889e892~mv2.jpeg/v1/fill/w_454,h_341,fp_0.50_0.50,q_90,enc_avif,quality_auto/ce35a6_6238472a58874e879580b1984889e892~mv2.jpeg">

    <!-- Color de la barra de direcciones / sistema en teléfonos móviles -->
    <meta name="theme-color" content="#0f1115">
    
    <!-- Tailwind CSS (Framework para utilidades de diseño modernas) -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- FontAwesome (Íconos) -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

    <!-- Configuración personalizada de Tailwind -->
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        dark: '#0f1115',
                        panel: '#1a1d24',
                        panelHover: '#22262f',
                        brand: '#005bea',
                        pastelBlue: '#aec6cf',
                        pastelGreen: '#77dd77'
                    },
                    fontFamily: {
                        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
                    }
                }
            }
        }
    </script>

    <style>
        body {
            overscroll-behavior-y: none;
            -webkit-tap-highlight-color: transparent;
        }
        
        ::-webkit-scrollbar {
            display: none;
        }

        /* --- CSS3 Avanzado --- */
        :root {
            --glass-bg: rgba(26, 29, 36, 0.70);
        }

        /* Fondo sutil y armonizado con la paleta de Raoult's Mist (Más transparente para resaltar la foto) */
        .app-bg {
            background-image: linear-gradient(
                to bottom, 
                rgba(15, 17, 21, 0.55), 
                rgba(26, 29, 36, 0.70)
            ), url('https://static.wixstatic.com/media/ce35a6_3f95ccf56b7f4ab881be8f4bd9dbce0b~mv2.jpeg/v1/fill/w_266,h_355,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202026-05-11%20at%208_59_33%20PM.jpeg');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
        }

        /* Rediseño de paneles para que tengan transparencia elegante y desenfoque (Glassmorphism) */
        .bg-panel {
            background-color: rgba(26, 29, 36, 0.55) !important;
            backdrop-filter: blur(12px) !important;
            -webkit-backdrop-filter: blur(12px) !important;
            border: 1px solid rgba(255, 255, 255, 0.08) !important;
        }

        .bg-panelHover {
            background-color: rgba(34, 38, 47, 0.75) !important;
            backdrop-filter: blur(12px) !important;
            -webkit-backdrop-filter: blur(12px) !important;
        }

        .glass-panel {
            background: rgba(26, 29, 36, 0.65);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
        }

        .slide-up {
            animation: slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            opacity: 0;
            transform: translateY(20px);
        }
        
        .fade-in {
            animation: fadeIn 0.4s ease-out forwards;
        }

        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }

        @keyframes slideUp {
            to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        /* Clases interactivas para los botones de redes sociales */
        .social-btn {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        /* Hover en azul pastel */
        .social-btn:hover {
            background-color: #aec6cf !important; /* pastelBlue */
            color: #0f1115 !important;
            transform: translateY(-2px);
            box-shadow: 0 10px 15px -3px rgba(174, 198, 207, 0.3);
        }

        /* Active/Click en verde pastel */
        .social-btn:active, .social-btn.clicked-state {
            background-color: #77dd77 !important; /* pastelGreen */
            color: #0f1115 !important;
            transform: scale(0.95);
            box-shadow: 0 4px 6px -1px rgba(119, 221, 119, 0.4);
        }

        @media (max-width: 350px) {
            .responsive-bento {
                grid-template-columns: 1fr !important;
                auto-rows: 120px !important;
            }
            .responsive-bento-wide {
                grid-column: span 1 !important;
            }
        }
    </style>
</head>
<body class="bg-black text-white min-h-screen flex justify-center font-sans">

    <!-- Contenedor Principal (Simulación de pantalla de Smartphone con fondo app-bg) -->
    <div class="w-full max-w-md app-bg min-h-screen flex flex-col relative shadow-2xl overflow-hidden border border-white/10">
        
        <!-- ========================================== -->
        <!-- BARRA DE ESTADO DEL SISTEMA (TOP STATUS)   -->
        <!-- ========================================== -->
        <div class="px-5 pt-3 pb-1 flex justify-between items-center text-[11px] font-bold text-gray-400 bg-black/40 select-none z-30">
            <!-- Hora y Fecha dinámica local -->
            <div id="status-left" class="flex items-center gap-1.5">
                <i class="fa-regular fa-calendar-alt text-gray-500"></i>
                <span id="system-date-time">--/-- • --:--</span>
            </div>
            <!-- Estado de la batería dinámica -->
            <div id="status-right" class="flex items-center gap-1.5">
                <span id="battery-percent" class="font-mono">--%</span>
                <i id="battery-icon" class="fa-solid fa-battery-three-quarters text-xs transition-colors duration-300"></i>
            </div>
        </div>

        <!-- ========================================== -->
        <!-- VISTA PRINCIPAL (HOME)                     -->
        <!-- ========================================== -->
        <div id="main-view" class="flex flex-col w-full h-full overflow-y-auto fade-in">
            <!-- Encabezado con logo adjuntado y hora actualizada de Zona 10 GT -->
            <header class="px-6 pt-6 pb-4 flex items-center justify-between sticky top-0 glass-panel z-20 border-b border-white/5">
                <div class="flex items-center gap-4 slide-up">
                    <!-- Botón del Título con la imagen de marca adjuntada -->
                    <div class="w-12 h-12 rounded-2xl bg-white overflow-hidden flex items-center justify-center shadow-lg shadow-emerald-500/10 border border-white/10 p-1">
                        <img src="https://static.wixstatic.com/media/ce35a6_6238472a58874e879580b1984889e892~mv2.jpeg/v1/fill/w_454,h_341,fp_0.50_0.50,q_90,enc_avif,quality_auto/ce35a6_6238472a58874e879580b1984889e892~mv2.jpeg" alt="Raoult's Mist Logo" class="w-full h-full object-cover rounded-xl" onerror="this.onerror=null; this.src='https://api.dicebear.com/7.x/initials/svg?seed=RaoultsMist&backgroundColor=059669';">
                    </div>
                    <div>
                        <div class="flex items-center gap-2">
                            <h1 class="font-bold text-lg tracking-tight text-emerald-400">RAOULT'S MIST</h1>
                            <!-- Hora Zona 10 Guatemala -->
                            <span id="header-time" class="text-[11px] font-mono bg-emerald-500/10 text-emerald-300 px-1.5 py-0.5 rounded border border-emerald-500/20 font-bold">00:00:00</span>
                        </div>
                        <p class="text-[10px] text-gray-400 font-semibold tracking-wider">Tarea15y25000701</p>
                    </div>
                </div>
                <div class="flex gap-2 slide-up delay-100">
                    <button id="bgm-btn" onclick="toggleBGM()" class="w-10 h-10 rounded-full bg-panel flex items-center justify-center text-gray-400 hover:text-emerald-400 transition-colors" title="Alternar Música">
                        <i class="fa-solid fa-volume-xmark"></i>
                    </button>
                    <button onclick="openUserModal()" class="w-10 h-10 rounded-full bg-panel flex items-center justify-center text-gray-400 hover:text-white transition-colors" title="Configurar Usuario">
                        <i class="fa-solid fa-user-gear"></i>
                    </button>
                </div>
            </header>

            <!-- Audio Background Element (Música de Naturaleza) -->
            <audio id="bg-music" loop>
                <source src="https://actions.google.com/sounds/v1/ambiences/forest_morning.ogg" type="audio/ogg">
            </audio>

            <!-- Bento Grid Principal (bg-transparent para heredar el fondo sutil de la app) -->
            <main class="flex-1 px-6 py-6 grid grid-cols-2 gap-4 auto-rows-[140px] responsive-bento relative z-10 bg-transparent">
                
                <!-- Splash de menta y lavanda (Banner Principal) -->
                <button onclick="showSubpage()" class="col-span-2 responsive-bento-wide relative overflow-hidden rounded-[2rem] p-5 flex flex-col justify-end transition-all active:scale-95 shadow-lg border border-white/10 slide-up delay-100 min-h-[160px] group text-left hover:border-emerald-500/30 hover:shadow-emerald-500/10">
                    <div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style="background-image: url('https://www.galileo.edu/facti/files/2026/05/Fotos-para-articulos-Galileo-18.png');"></div>
                    <div class="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/50 to-transparent"></div>
                    
                    <div class="relative z-10 flex justify-between items-end w-full">
                        <div>
                            <span class="block text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1">Fisicoquímica</span>
                            <span class="block text-xl font-bold text-white leading-tight">Splash de menta<br>y lavanda</span>
                        </div>
                        <div class="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 shadow-inner group-hover:bg-emerald-500/20 group-hover:text-emerald-300 transition-all">
                            <i class="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>
                </button>

                <!-- Tienda & Catálogo (Resalte Pastel Esmeralda) -->
                <button onclick="showCatalog()" class="col-span-1 bg-gradient-to-br from-teal-950/40 to-emerald-950/40 rounded-[2rem] p-5 flex flex-col justify-between items-start transition-all active:scale-95 shadow-lg slide-up delay-100 hover:bg-emerald-200 hover:from-emerald-200 hover:to-emerald-200 hover:text-slate-900 group">
                    <div class="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xl group-hover:bg-slate-900/10 group-hover:text-slate-900 transition-colors">
                        <i class="fa-solid fa-store"></i>
                    </div>
                    <div class="text-left w-full flex justify-between items-end">
                        <div>
                            <span class="block text-xs font-medium text-gray-400 group-hover:text-slate-700 transition-colors">Ver Catálogo</span>
                            <span class="block text-lg font-bold text-emerald-300 group-hover:text-slate-900 transition-colors">Tienda</span>
                        </div>
                        <i class="fa-solid fa-chevron-right text-xs text-emerald-400 group-hover:text-slate-900 mb-1 transition-colors"></i>
                    </div>
                </button>

                <!-- Formulario Validado (Resalte Pastel Índigo) -->
                <button onclick="showFormView()" class="col-span-1 bg-gradient-to-br from-indigo-950/40 to-blue-950/40 rounded-[2rem] p-5 flex flex-col justify-between items-start transition-all active:scale-95 shadow-lg slide-up delay-100 hover:bg-indigo-200 hover:from-indigo-200 hover:to-indigo-200 hover:text-slate-900 group">
                    <div class="w-12 h-12 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xl group-hover:bg-slate-900/10 group-hover:text-slate-900 transition-colors">
                        <i class="fa-solid fa-clipboard-question"></i>
                    </div>
                    <div class="text-left w-full flex justify-between items-end">
                        <div>
                            <span class="block text-xs font-medium text-gray-400 group-hover:text-slate-700 transition-colors">Encuesta / Pedidos</span>
                            <span class="block text-lg font-bold text-indigo-300 group-hover:text-slate-900 transition-colors">Formulario</span>
                        </div>
                        <i class="fa-solid fa-chevron-right text-xs text-indigo-400 group-hover:text-slate-900 mb-1 transition-colors"></i>
                    </div>
                </button>

                <!-- Redes Sociales (Resalte Pastel Rosa) -->
                <button onclick="showSocials()" class="col-span-1 bg-gradient-to-br from-pink-950/30 to-rose-950/30 rounded-[2rem] p-5 flex flex-col justify-between items-start transition-all active:scale-95 shadow-lg slide-up delay-200 hover:bg-pink-200 hover:from-pink-200 hover:to-pink-200 hover:text-slate-900 group">
                    <div class="w-12 h-12 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center text-xl group-hover:bg-slate-900/10 group-hover:text-slate-900 transition-colors">
                        <i class="fa-solid fa-share-nodes"></i>
                    </div>
                    <div class="text-left w-full flex justify-between items-end">
                        <div>
                            <span class="block text-xs font-medium text-gray-400 group-hover:text-slate-700 transition-colors">Comunidad</span>
                            <span class="block text-lg font-bold text-pink-300 group-hover:text-slate-900 transition-colors">Redes</span>
                        </div>
                        <i class="fa-solid fa-chevron-right text-xs text-pink-400 group-hover:text-slate-900 mb-1 transition-colors"></i>
                    </div>
                </button>

                <!-- Sitio Oficial (Resalte Pastel Celeste/Sky) -->
                <a href="https://robertotelon.wixsite.com/my-site-5" target="_blank" class="col-span-1 bg-panel rounded-[2rem] p-5 flex flex-col justify-between items-start transition-all active:scale-95 shadow-sm slide-up delay-200 hover:bg-sky-200 hover:text-slate-900 group">
                    <div class="w-11 h-11 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center text-lg mb-2 group-hover:bg-slate-900/10 group-hover:text-slate-900 transition-colors">
                        <i class="fa-solid fa-globe"></i>
                    </div>
                    <div class="text-left">
                        <span class="block text-xs text-gray-400 group-hover:text-slate-700 transition-colors">Sitio Oficial</span>
                        <span class="block text-base font-bold text-blue-400 group-hover:text-slate-900 transition-colors">Ir a mi Web</span>
                    </div>
                </a>

                <!-- Ir a Mi U (Logo Galileo con fondo Blanco nativo y Resalte Pastel Púrpura) -->
                <a href="https://www.galileo.edu" target="_blank" class="col-span-1 bg-panel rounded-[2rem] p-4 flex flex-col justify-between items-start transition-all active:scale-95 shadow-sm slide-up delay-200 hover:bg-purple-200 hover:text-slate-900 group">
                    <div class="w-full flex justify-center py-2 bg-white rounded-2xl p-2 shadow-inner">
                        <img src="https://www.galileo.edu/facti/wp-content/themes/galileo-theme/img/logo-header.png" alt="Logo Universidad Galileo" class="max-h-8 object-contain">
                    </div>
                    <div class="text-left mt-2 w-full">
                        <span class="block text-[10px] text-gray-400 group-hover:text-slate-700 transition-colors">Universidad Galileo</span>
                        <span class="block text-sm font-bold text-purple-400 group-hover:text-slate-900 transition-colors">Ir a Mi U</span>
                    </div>
                </a>

                <!-- Video Interactivo (Resalte Pastel Coral/Rojo) -->
                <a href="https://www.youtube.com/watch?v=a5MttjQpu5g" target="_blank" class="col-span-1 bg-panel rounded-[2rem] p-5 flex flex-col justify-between items-start transition-all active:scale-95 shadow-sm slide-up delay-300 hover:bg-red-200 hover:text-slate-900 group">
                    <div class="w-11 h-11 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center text-lg mb-2 group-hover:bg-slate-900/10 group-hover:text-slate-900 transition-colors">
                        <i class="fa-solid fa-play"></i>
                    </div>
                    <div class="text-left">
                        <span class="block text-xs text-gray-400 group-hover:text-slate-700 transition-colors">YouTube Media</span>
                        <span class="block text-base font-bold text-red-400 group-hover:text-slate-900 transition-colors">Video Interactivo</span>
                    </div>
                </a>

                <!-- NUEVO BOTÓN: ✨ Consultor Inteligente Gemini (Fisicoquímica & Formulación IA) -->
                <button onclick="showAIChat()" class="col-span-1 bg-gradient-to-br from-purple-950/40 to-emerald-950/40 rounded-[2rem] p-5 flex flex-col justify-between items-start transition-all active:scale-95 shadow-lg slide-up delay-300 hover:from-purple-900/50 hover:to-emerald-900/50 border border-purple-500/20 group">
                    <div class="w-12 h-12 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-xl group-hover:bg-slate-900/10 group-hover:text-purple-300 transition-colors">
                        <i class="fa-solid fa-wand-magic-sparkles"></i>
                    </div>
                    <div class="text-left w-full flex justify-between items-end">
                        <div>
                            <span class="block text-xs font-medium text-gray-400 group-hover:text-slate-300 transition-colors">Soporte IA</span>
                            <span class="block text-lg font-bold text-purple-300 group-hover:text-purple-200 transition-colors">✨ Consultor IA</span>
                        </div>
                        <i class="fa-solid fa-chevron-right text-xs text-purple-400 mb-1 transition-colors"></i>
                    </div>
                </button>

            </main>

            <!-- ========================================== -->
            <!-- FIRMA DE AUTORÍA Y DESCARGA (BENTO GRID INFERIOR) -->
            <!-- ========================================== -->
            <div class="px-6 py-2 grid grid-cols-3 gap-4 select-none">
                <!-- Firma de Autoría "Ismatul" (Ocupa 2 columnas) -->
                <div class="col-span-2 bg-panel/80 backdrop-blur-sm rounded-[2rem] p-4 border border-white/5 flex flex-col items-center justify-center relative overflow-hidden h-24 shadow-inner">
                    <canvas id="author-signature-canvas" class="w-full h-full block absolute inset-0"></canvas>
                    <span class="absolute bottom-1.5 text-[8px] text-gray-500 tracking-widest uppercase pointer-events-none">Firma de Autoría</span>
                </div>
                
                <!-- BOTÓN: Descargar App -->
                <button onclick="installPWA()" class="col-span-1 bg-gradient-to-br from-emerald-600/30 to-teal-600/30 rounded-[2rem] border border-emerald-500/20 flex flex-col items-center justify-center gap-1.5 hover:bg-emerald-200 hover:text-slate-900 group active:scale-95 transition-all shadow-lg shadow-emerald-500/10">
                    <div class="w-9 h-9 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-sm group-hover:bg-slate-900/10 group-hover:text-slate-900 transition-colors">
                        <i class="fa-solid fa-download"></i>
                    </div>
                    <span class="text-[10px] font-bold text-center leading-none">Descargar<br>App</span>
                </button>
            </div>

            <!-- Footer Perfil con Nombre Dinámico de Usuario -->
            <footer class="px-6 pb-8 pt-4 mt-auto glass-panel border-t border-white/5 z-20">
                <div class="bg-panel rounded-[2rem] p-4 flex items-center justify-between shadow-sm slide-up delay-300">
                    <div onclick="openUserModal()" class="flex items-center gap-3 cursor-pointer group">
                        <div class="relative">
                            <img id="user-display-avatar" src="https://api.dicebear.com/7.x/notionists/svg?seed=GalileoUser&backgroundColor=e2e8f0" alt="Foto de perfil" class="w-12 h-12 rounded-full object-cover border-2 border-dark group-hover:border-emerald-500 transition-all">
                            <div class="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-panel rounded-full animate-pulse"></div>
                        </div>
                        <div>
                            <!-- Nombre dinámico inyectado aquí -->
                            <p id="user-display-name" class="font-bold text-sm text-white group-hover:text-emerald-300 transition-colors">Cargando...</p>
                            <p id="user-display-email" class="text-[10px] text-gray-400 font-mono">estudiante@galileo.edu</p>
                        </div>
                    </div>
                    
                    <!-- Botón de Salir -->
                    <button onclick="logoutSession()" class="w-10 h-10 rounded-full bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white transition-colors flex items-center justify-center group" title="Cerrar Sesión">
                        <i class="fa-solid fa-arrow-right-from-bracket group-hover:-translate-x-0.5 transition-transform"></i>
                    </button>
                </div>
            </footer>
        </div>

        <!-- ========================================== -->
        <!-- SUBPÁGINA (SPLASH DE MENTA Y LAVANDA)      -->
        <!-- ========================================== -->
        <div id="subpage-view" class="hidden absolute inset-0 bg-dark/85 backdrop-blur-lg z-50 flex-col w-full h-full overflow-y-auto">
            <header class="px-6 pt-10 pb-4 flex items-center gap-4 sticky top-0 glass-panel z-20 border-b border-white/5">
                <button onclick="hideSubpage()" class="w-10 h-10 rounded-full bg-panel flex items-center justify-center text-gray-400 hover:text-white transition-colors active:scale-90">
                    <i class="fa-solid fa-arrow-left"></i>
                </button>
                <h1 class="font-bold text-lg tracking-tight text-white truncate">Splash de menta y lavanda</h1>
            </header>

            <main class="flex-1 px-6 py-6 flex flex-col gap-6 fade-in">
                <!-- Imagen Destacada -->
                <div class="w-full h-56 rounded-[2rem] overflow-hidden shadow-lg border border-white/10 relative">
                    <img src="https://www.galileo.edu/facti/files/2026/05/Fotos-para-articulos-Galileo-18.png" alt="Splash de menta y lavanda" class="w-full h-full object-cover">
                </div>
                
                <!-- Tarjeta de Información Científica -->
                <div class="bg-panel rounded-[2rem] p-6 text-gray-300 text-sm leading-relaxed">
                    <p class="mb-4">
                        La industria cosmética demanda productos que integren bienestar sensorial con bases científicas sólidas. El body splash es una mezcla hidroalcohólica ligera cuya formulación implica equilibrar fenómenos fisicoquímicos simultáneos:
                    </p>
                    <ul class="list-disc pl-5 space-y-3 text-emerald-100/70 marker:text-emerald-500 mb-4">
                        <li>Miscibilidad de fases polar (agua) y apolar (aceite esencial) mediada por alcohol anfipático.</li>
                        <li>Reducción de presión de vapor por humectantes (glicerina, propilenglicol) según Ley de Raoult.</li>
                        <li>Control de higroscopía para estabilidad en almacenamiento.</li>
                    </ul>

                    <!-- Botón de consulta directa a Gemini sobre esta fórmula -->
                    <button onclick="openAIChatWithContext('¿Cómo influye exactamente la Ley de Raoult en la estabilidad y presión de vapor del Splash de Menta y Lavanda con glicerina?')" class="w-full bg-gradient-to-r from-purple-800 to-indigo-800 hover:from-purple-700 hover:to-indigo-700 text-white rounded-2xl p-3.5 font-bold flex items-center justify-center gap-2.5 transition-all shadow-md shadow-purple-900/40 active:scale-95 border border-purple-500/20 text-xs">
                        <i class="fa-solid fa-wand-magic-sparkles"></i>
                        <span>✨ Preguntar a la IA sobre esta fórmula</span>
                    </button>
                </div>

                <!-- Botón TTS (Texto a Voz) -->
                <button id="tts-btn" onclick="toggleTTS()" class="w-full bg-emerald-600 hover:bg-emerald-500 text-white rounded-[1.5rem] p-4 font-bold flex items-center justify-center gap-3 transition-all shadow-lg shadow-emerald-600/20 active:scale-95 border border-emerald-400/30">
                    <i class="fa-solid fa-volume-high text-xl"></i>
                    <span>Escuchar Explicación Científica</span>
                </button>
                <div class="pb-10"></div>
            </main>
        </div>

        <!-- ========================================== -->
        <!-- SUBPÁGINA: REDES SOCIALES (CON AUDIO)      -->
        <!-- ========================================== -->
        <div id="socials-view" class="hidden absolute inset-0 bg-dark/85 backdrop-blur-lg z-50 flex-col w-full h-full overflow-y-auto">
            <header class="px-6 pt-10 pb-4 flex items-center gap-4 sticky top-0 glass-panel z-20 border-b border-white/5">
                <button onclick="hideSocials()" class="w-10 h-10 rounded-full bg-panel flex items-center justify-center text-gray-400 hover:text-white transition-colors active:scale-90">
                    <i class="fa-solid fa-arrow-left"></i>
                </button>
                <h1 class="font-bold text-lg tracking-tight text-white">Nuestras Redes</h1>
            </header>

            <main class="flex-1 px-6 py-6 flex flex-col gap-5 fade-in">
                <!-- Tarjeta Explicativa -->
                <div class="bg-panel rounded-[2rem] p-5 text-gray-400 text-xs">
                    <p class="font-bold text-white text-sm mb-1">Únete a nuestra Comunidad</p>
                    <p>Interactúa con nuestro equipo de formulación y descubre más avances sobre la Ley de Raoult y cosmética científica.</p>
                </div>

                <!-- Lista de Redes Sociales con efecto dinámico -->
                <div class="flex flex-col gap-3">
                    
                    <!-- Facebook -->
                    <button onclick="handleSocialClick('Facebook', 'https://facebook.com')" class="social-btn w-full bg-panel rounded-2xl p-4 flex items-center justify-between font-semibold text-sm active:scale-95">
                        <div class="flex items-center gap-3.5">
                            <span class="w-10 h-10 rounded-full bg-blue-600/20 text-blue-400 flex items-center justify-center text-lg">
                                <i class="fa-brands fa-facebook-f"></i>
                            </span>
                            <span>Facebook</span>
                        </div>
                        <i class="fa-solid fa-arrow-up-right-from-square text-xs opacity-60"></i>
                    </button>

                    <!-- Instagram -->
                    <button onclick="handleSocialClick('Instagram', 'https://instagram.com')" class="social-btn w-full bg-panel rounded-2xl p-4 flex items-center justify-between font-semibold text-sm active:scale-95">
                        <div class="flex items-center gap-3.5">
                            <span class="w-10 h-10 rounded-full bg-pink-600/20 text-pink-400 flex items-center justify-center text-lg">
                                <i class="fa-brands fa-instagram"></i>
                            </span>
                            <span>Instagram</span>
                        </div>
                        <i class="fa-solid fa-arrow-up-right-from-square text-xs opacity-60"></i>
                    </button>

                    <!-- WhatsApp -->
                    <button onclick="handleSocialClick('WhatsApp', 'https://whatsapp.com')" class="social-btn w-full bg-panel rounded-2xl p-4 flex items-center justify-between font-semibold text-sm active:scale-95">
                        <div class="flex items-center gap-3.5">
                            <span class="w-10 h-10 rounded-full bg-green-600/20 text-green-400 flex items-center justify-center text-lg">
                                <i class="fa-brands fa-whatsapp"></i>
                            </span>
                            <span>WhatsApp</span>
                        </div>
                        <i class="fa-solid fa-arrow-up-right-from-square text-xs opacity-60"></i>
                    </button>

                    <!-- X -->
                    <button onclick="handleSocialClick('X', 'https://x.com')" class="social-btn w-full bg-panel rounded-2xl p-4 flex items-center justify-between font-semibold text-sm active:scale-95">
                        <div class="flex items-center gap-3.5">
                            <span class="w-10 h-10 rounded-full bg-gray-100/15 text-gray-300 flex items-center justify-center text-lg">
                                <i class="fa-brands fa-x-twitter"></i>
                            </span>
                            <span>X (Twitter)</span>
                        </div>
                        <i class="fa-solid fa-arrow-up-right-from-square text-xs opacity-60"></i>
                    </button>

                </div>

                <div class="pb-10"></div>
            </main>
        </div>

        <!-- ========================================== -->
        <!-- VISTA: TIENDA & CATÁLOGO                   -->
        <!-- ========================================== -->
        <div id="catalog-view" class="hidden absolute inset-0 bg-dark/85 backdrop-blur-lg z-50 flex-col w-full h-full overflow-y-auto">
            <header class="px-6 pt-10 pb-4 flex items-center justify-between sticky top-0 glass-panel z-20 border-b border-white/5">
                <div class="flex items-center gap-4">
                    <button onclick="hideCatalog()" class="w-10 h-10 rounded-full bg-panel flex items-center justify-center text-gray-400 hover:text-white transition-colors active:scale-90">
                        <i class="fa-solid fa-arrow-left"></i>
                    </button>
                    <h1 class="font-bold text-lg tracking-tight text-white">Catálogo Científico</h1>
                </div>
                <div class="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-base">
                    <i class="fa-solid fa-bag-shopping"></i>
                </div>
            </header>

            <main class="flex-1 px-6 py-6 flex flex-col gap-6 fade-in">
                <!-- Tarjeta del Producto Interactivo -->
                <div class="bg-panel rounded-[2rem] p-5 shadow-xl flex flex-col gap-4 relative overflow-hidden">
                    <div class="absolute top-4 right-4 bg-emerald-500/10 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full border border-emerald-500/20">
                        Destacado
                    </div>
                    
                    <!-- Imagen miniatura elegante -->
                    <div class="w-full h-40 rounded-2xl overflow-hidden relative">
                        <img src="https://www.galileo.edu/facti/files/2026/05/Fotos-para-articulos-Galileo-18.png" alt="Raoult's Mist" class="w-full h-full object-cover">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>

                    <!-- Datos del producto -->
                    <div>
                        <h2 class="text-xl font-bold text-white tracking-wide">Raoult's Mist Splash</h2>
                        <p class="text-xs text-emerald-400 font-semibold mt-1">Línea de Formulación Fisicoquímica - FACTI</p>
                    </div>

                    <!-- Pestaña de Ingredientes -->
                    <div class="bg-black/40 rounded-xl p-3 border border-white/5">
                        <span class="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5">Ingredientes Activos:</span>
                        <div class="flex flex-wrap gap-1.5">
                            <span class="text-[10px] bg-emerald-500/10 text-emerald-300 px-2 py-0.5 rounded-md border border-emerald-500/10">Esencia de Menta</span>
                            <span class="text-[10px] bg-purple-500/10 text-purple-300 px-2 py-0.5 rounded-md border border-purple-500/10">Esencia de Lavanda</span>
                            <span class="text-[10px] bg-blue-500/10 text-blue-300 px-2 py-0.5 rounded-md border border-blue-500/10">Glicerina Humectante</span>
                            <span class="text-[10px] bg-yellow-500/10 text-yellow-300 px-2 py-0.5 rounded-md border border-yellow-500/10">Alcohol Hidroalcohólico</span>
                        </div>
                    </div>

                    <!-- Selector de Variante e Interactividad de Precios -->
                    <div class="grid grid-cols-2 gap-3">
                        <div class="col-span-2">
                            <label class="block text-xs font-semibold text-gray-400 mb-1">Fragancia</label>
                            <select id="variant-select" onchange="updateProductPrice()" class="w-full bg-dark text-white rounded-xl px-3 py-2 text-xs border border-white/10 focus:border-emerald-500 focus:outline-none">
                                <option value="menta">Menta & Lavanda (Original)</option>
                                <option value="eucalipto">Eucalipto & Menta (Fresh)</option>
                                <option value="citrico">Cítrico & Lavanda (Calm)</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-xs font-semibold text-gray-400 mb-1">Presentación</label>
                            <select id="size-select" onchange="updateProductPrice()" class="w-full bg-dark text-white rounded-xl px-3 py-2 text-xs border border-white/10 focus:border-emerald-500 focus:outline-none">
                                <option value="120ml" selected>120 mL (Personal)</option>
                                <option value="250ml">250 mL (Premium)</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-xs font-semibold text-gray-400 mb-1">Cantidad</label>
                            <div class="flex items-center bg-dark border border-white/10 rounded-xl overflow-hidden h-[34px]">
                                <button type="button" onclick="changeQuantity(-1)" class="px-3 h-full text-gray-400 hover:text-white bg-white/5 active:bg-white/10 transition-colors">-</button>
                                <input type="number" id="quantity-input" min="1" max="99" value="1" onchange="updateProductPrice()" class="w-full h-full bg-transparent text-center text-white text-xs focus:outline-none m-0 p-0" readonly>
                                <button type="button" onclick="changeQuantity(1)" class="px-3 h-full text-gray-400 hover:text-white bg-white/5 active:bg-white/10 transition-colors">+</button>
                            </div>
                        </div>
                    </div>

                    <!-- Visualización Dinámica de Precios -->
                    <div class="flex items-center justify-between border-t border-white/5 pt-4 mt-2">
                        <div>
                            <span class="block text-[10px] text-gray-400 font-bold uppercase tracking-widest">Total a pagar</span>
                            <span id="product-price" class="text-2xl font-black text-white">Q95.00 <span class="text-xs font-normal text-gray-400">GTQ</span></span>
                        </div>
                        <button onclick="goToPaymentFromStore()" class="bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white font-bold text-xs py-2.5 px-4 rounded-xl shadow-lg shadow-emerald-600/25 transition-all flex items-center gap-2 border border-emerald-400/30">
                            <i class="fa-solid fa-credit-card"></i>
                            Proceder al Pago
                        </button>
                    </div>
                </div>

                <!-- Información Tecnológica del Envase -->
                <div class="bg-panel rounded-[2rem] p-5 text-gray-400 text-xs flex flex-col gap-2">
                    <p class="font-bold text-white text-sm">Garantía de Estabilidad (Ley de Raoult)</p>
                    <p>La adición precisa de humectantes reduce la presión de vapor, evitando que el aroma volatilice excesivamente rápido en climas cálidos.</p>
                </div>
                <div class="pb-10"></div>
            </main>
        </div>

        <!-- ========================================== -->
        <!-- VISTA: PAGO DINÁMICO                       -->
        <!-- ========================================== -->
        <div id="payment-view" class="hidden absolute inset-0 bg-dark/85 backdrop-blur-lg z-50 flex-col w-full h-full overflow-y-auto">
            <header class="px-6 pt-10 pb-4 flex items-center gap-4 sticky top-0 glass-panel z-20 border-b border-white/5">
                <button onclick="hidePaymentView()" class="w-10 h-10 rounded-full bg-panel flex items-center justify-center text-gray-400 hover:text-white transition-colors active:scale-90">
                    <i class="fa-solid fa-arrow-left"></i>
                </button>
                <h1 class="font-bold text-lg tracking-tight text-white">Pago Dinámico</h1>
            </header>

            <main class="flex-1 px-6 py-6 flex flex-col gap-6 fade-in">
                <div class="bg-panel rounded-[2rem] p-6 shadow-xl flex flex-col gap-4">
                    <div class="text-left">
                        <h2 class="text-lg font-bold text-emerald-400">Finalizar Compra</h2>
                        <p class="text-xs text-gray-400 mt-1">Ingresa tus datos de pago para confirmar tu orden.</p>
                    </div>

                    <!-- Resumen de Compra Dinámico -->
                    <div class="bg-black/40 p-4 rounded-xl border border-white/5 flex flex-col gap-2">
                        <div class="flex justify-between items-center text-xs">
                            <span class="text-gray-400 font-bold uppercase">Producto</span>
                            <span id="payment-summary-variant" class="font-bold text-white">...</span>
                        </div>
                        <div class="flex justify-between items-center text-xs border-t border-white/10 pt-2">
                            <span class="text-gray-400 font-bold uppercase">Total a Pagar</span>
                            <span id="payment-summary-price" class="font-black text-lg text-emerald-400">...</span>
                        </div>
                    </div>

                    <!-- Descuento Estudiante Galileo -->
                    <div class="bg-emerald-950/30 p-3 rounded-xl border border-emerald-500/20">
                        <label class="block text-[10px] font-bold text-emerald-400 mb-1.5 uppercase"><i class="fa-solid fa-graduation-cap mr-1"></i>¿Eres de U. Galileo?</label>
                        <div class="flex gap-2">
                            <input type="text" id="carnet-input" placeholder="Carnet (Ej. 24001234)" maxlength="8" class="flex-1 bg-dark text-white rounded-lg px-3 py-2 text-xs border border-white/10 focus:border-emerald-500 focus:outline-none transition-all text-center font-mono">
                            <button type="button" onclick="applyStudentDiscount()" class="bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg px-4 text-xs font-bold transition-colors active:scale-95 shadow-md">Aplicar</button>
                        </div>
                        <p id="discount-msg" class="text-[10px] text-emerald-300 mt-2 hidden"><i class="fa-solid fa-circle-check mr-1"></i>¡Descuento del 15% aplicado!</p>
                        <p id="discount-err" class="text-[10px] text-red-400 mt-2 hidden"><i class="fa-solid fa-circle-xmark mr-1"></i>Carnet inválido. Ingresa 8 dígitos.</p>
                    </div>

                    <!-- Formulario de Tarjeta Simulado -->
                    <div class="flex flex-col gap-3">
                        <div>
                            <label class="block text-[10px] font-bold text-gray-400 mb-1 uppercase">Número de Tarjeta</label>
                            <div class="relative">
                                <span class="absolute left-3 top-2.5 text-gray-400 text-sm"><i class="fa-regular fa-credit-card"></i></span>
                                <input type="text" placeholder="0000 0000 0000 0000" maxlength="19" class="w-full bg-dark text-white rounded-xl pl-9 pr-3 py-2 text-sm border border-white/10 focus:border-emerald-500 focus:outline-none transition-all">
                            </div>
                        </div>
                        <div class="grid grid-cols-2 gap-3">
                            <div>
                                <label class="block text-[10px] font-bold text-gray-400 mb-1 uppercase">Vencimiento</label>
                                <input type="text" placeholder="MM/YY" maxlength="5" class="w-full bg-dark text-white rounded-xl px-3 py-2 text-sm border border-white/10 focus:border-emerald-500 focus:outline-none transition-all text-center">
                            </div>
                            <div>
                                <label class="block text-[10px] font-bold text-gray-400 mb-1 uppercase">CVV</label>
                                <input type="password" placeholder="***" maxlength="3" class="w-full bg-dark text-white rounded-xl px-3 py-2 text-sm border border-white/10 focus:border-emerald-500 focus:outline-none transition-all text-center">
                            </div>
                        </div>
                    </div>

                    <!-- Botón Pagar -->
                    <button type="button" onclick="processPayment()" id="btn-process-payment" class="w-full bg-emerald-600 hover:bg-emerald-500 text-white rounded-[1.5rem] p-3.5 font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-600/20 active:scale-95 border border-emerald-400/30 mt-2">
                        <i class="fa-solid fa-lock"></i>
                        <span>Pagar Total</span>
                    </button>
                </div>
                
                <!-- Notificación Pago Exitoso -->
                <div id="payment-toast" class="hidden bg-emerald-950/95 border border-emerald-500/40 text-emerald-300 p-4 rounded-xl flex items-center gap-3 shadow-2xl transition-all">
                    <i class="fa-solid fa-check-double text-xl text-emerald-400"></i>
                    <div>
                        <p class="font-bold text-xs text-white">¡Pago Aprobado!</p>
                        <p class="text-[10px] text-emerald-400/80">Redirigiendo a formulario de verificación...</p>
                    </div>
                </div>
                <div class="pb-10"></div>
            </main>
        </div>

        <!-- ========================================== -->
        <!-- VISTA: FORMULARIO VALIDADO (REDIRECT)      -->
        <!-- ========================================== -->
        <div id="form-view" class="hidden absolute inset-0 bg-dark/85 backdrop-blur-lg z-50 flex-col w-full h-full overflow-y-auto">
            <header class="px-6 pt-10 pb-4 flex items-center gap-4 sticky top-0 glass-panel z-20 border-b border-white/5">
                <button onclick="hideFormView()" class="w-10 h-10 rounded-full bg-panel flex items-center justify-center text-gray-400 hover:text-white transition-colors active:scale-90">
                    <i class="fa-solid fa-arrow-left"></i>
                </button>
                <h1 class="font-bold text-lg tracking-tight text-white">Formulario de Pedido</h1>
            </header>

            <main class="flex-1 px-6 py-6 flex flex-col gap-6 fade-in">
                
                <!-- Tarjeta Principal del Formulario -->
                <div class="bg-panel rounded-[2rem] p-6 shadow-xl flex flex-col gap-4">
                    <div class="text-left">
                        <h2 class="text-lg font-bold text-white">Validación de Datos</h2>
                        <p class="text-xs text-gray-400 mt-1">Al validar, el perfil de la app se actualizará con tu nombre.</p>
                    </div>

                    <form id="order-form" onsubmit="handleFormSubmission(event)" class="flex flex-col gap-4 text-left">
                        
                        <!-- Campo: Nombre Completo -->
                        <div>
                            <label class="block text-xs font-bold text-gray-400 mb-1.5 uppercase">Nombre Completo</label>
                            <div class="relative">
                                <span class="absolute left-3 top-3 text-gray-400 text-sm"><i class="fa-solid fa-user"></i></span>
                                <input type="text" id="form-name" placeholder="Ej. Roberto Telón" class="w-full bg-dark text-white rounded-xl pl-9 pr-3 py-2.5 text-sm border border-white/10 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 focus:outline-none transition-all">
                            </div>
                            <p id="error-name" class="hidden text-[10px] text-red-500 mt-1"><i class="fa-solid fa-triangle-exclamation mr-1"></i>Ingresa un nombre válido (mínimo 4 letras).</p>
                        </div>

                        <!-- Campo: Correo Electrónico -->
                        <div>
                            <label class="block text-xs font-bold text-gray-400 mb-1.5 uppercase">Correo Electrónico</label>
                            <div class="relative">
                                <span class="absolute left-3 top-3 text-gray-400 text-sm"><i class="fa-solid fa-envelope"></i></span>
                                <input type="email" id="form-email" placeholder="roberto.telon@galileo.edu" class="w-full bg-dark text-white rounded-xl pl-9 pr-3 py-2.5 text-sm border border-white/10 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 focus:outline-none transition-all">
                            </div>
                            <p id="error-email" class="hidden text-[10px] text-red-500 mt-1"><i class="fa-solid fa-triangle-exclamation mr-1"></i>Ingresa un correo con estructura correcta.</p>
                        </div>

                        <!-- Info Detalle Seleccionado -->
                        <div class="grid grid-cols-2 gap-3 bg-black/40 p-3 rounded-xl border border-white/5">
                            <div>
                                <span class="block text-[10px] text-gray-400 font-bold uppercase">Variante y Cant.</span>
                                <span id="form-summary-variant" class="text-xs font-bold text-white">1x Menta & Lavanda</span>
                            </div>
                            <div>
                                <span class="block text-[10px] text-gray-400 font-bold uppercase">Tamaño / Total</span>
                                <span id="form-summary-price" class="text-xs font-bold text-indigo-400">120 mL (Q95.00)</span>
                            </div>
                        </div>

                        <!-- Aviso Legal / Académico -->
                        <div class="flex items-start gap-2.5 mt-2">
                            <input type="checkbox" id="form-terms" class="mt-0.5 rounded border-gray-600 bg-dark text-indigo-500 focus:ring-indigo-500/50">
                            <label for="form-terms" class="text-[10px] text-gray-400 leading-tight">Acepto los términos de validación para interactuar con la simulación académica de FACTI - Universidad Galileo.</label>
                        </div>
                        <p id="error-terms" class="hidden text-[10px] text-red-500"><i class="fa-solid fa-triangle-exclamation mr-1"></i>Debes aceptar el aviso para continuar.</p>

                        <!-- Botones de Acción (Principal y Extra) -->
                        <div class="flex flex-col gap-3 mt-4">
                            <button type="submit" class="w-full bg-indigo-600 hover:bg-indigo-500 text-white rounded-[1.5rem] p-4 font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-indigo-600/20 active:scale-95 border border-indigo-400/30">
                                <span>Verificar y Abrir Formulario</span>
                                <i class="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                            </button>
                            
                            <!-- Botón extra solicitado -->
                            <button type="button" onclick="alert('El comprobante de pago ha sido generado y descargado exitosamente en formato PDF.');" class="w-full bg-panelHover text-gray-300 rounded-[1.5rem] p-4 font-bold flex items-center justify-center gap-2 transition-all active:scale-95 border border-white/10 hover:text-white hover:border-emerald-500/30">
                                <i class="fa-solid fa-file-invoice-dollar text-emerald-400"></i>
                                <span>Descargar Comprobante</span>
                            </button>
                        </div>
                    </form>
                </div>

                <!-- Notificación de éxito -->
                <div id="toast" class="hidden bg-emerald-950/95 border border-emerald-500/40 text-emerald-300 p-4 rounded-xl flex items-center gap-3 shadow-2xl transition-all">
                    <i class="fa-solid fa-circle-check text-xl text-emerald-400"></i>
                    <div>
                        <p class="font-bold text-xs text-white">¡Validación Correcta!</p>
                        <p class="text-[10px] text-emerald-400/80">Perfil actualizado y redirigiendo...</p>
                    </div>
                </div>

                <div class="pb-10"></div>
            </main>
        </div>

        <!-- ========================================== -->
        <!-- NUEVA VISTA: CHATBOT CIENTÍFICO GEMINI     -->
        <!-- ========================================== -->
        <div id="ai-chat-view" class="hidden absolute inset-0 bg-dark/85 backdrop-blur-lg z-50 flex-col w-full h-full overflow-y-auto">
            <header class="px-6 pt-10 pb-4 flex items-center gap-4 sticky top-0 glass-panel z-20 border-b border-purple-500/10">
                <button onclick="hideAIChat()" class="w-10 h-10 rounded-full bg-panel flex items-center justify-center text-gray-400 hover:text-white transition-colors active:scale-90">
                    <i class="fa-solid fa-arrow-left"></i>
                </button>
                <div class="flex items-center gap-2">
                    <span class="text-purple-400 text-lg"><i class="fa-solid fa-wand-magic-sparkles"></i></span>
                    <h1 class="font-bold text-lg tracking-tight text-white">Consultor IA Gemini</h1>
                </div>
            </header>

            <main class="flex-1 flex flex-col h-[calc(100%-80px)] relative">
                <!-- Contenedor del Historial de Chat -->
                <div id="ai-chat-history" class="flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-4 scroll-smooth">
                    <!-- Mensaje Inicial del Sistema -->
                    <div class="flex flex-col gap-1.5 self-start max-w-[85%] bg-panel rounded-[1.5rem] rounded-tl-none p-4 border border-purple-500/10">
                        <p class="text-xs text-gray-300 leading-relaxed">
                            ¡Hola! Soy tu consultor científico de <strong>Raoult's Mist</strong>. Pregúntame lo que quieras sobre fisicoquímica, misibilidad de aceites esenciales o cómo la Ley de Raoult estabiliza las fragancias. ✨
                        </p>
                        <span class="text-[8px] text-purple-400 font-bold self-end uppercase">Gemini AI</span>
                    </div>
                </div>

                <!-- Sugerencias de Consultas Rápidas -->
                <div class="px-6 py-2 flex gap-2 overflow-x-auto shrink-0 scrollbar-none select-none">
                    <button onclick="sendQuickQuery('¿Qué es la Ley de Raoult?')" class="shrink-0 bg-purple-500/10 border border-purple-500/20 text-purple-300 px-3 py-1.5 rounded-full text-[10px] font-bold hover:bg-purple-500/20 active:scale-95 transition-all">¿Qué es la Ley de Raoult?</button>
                    <button onclick="sendQuickQuery('¿Cómo estabiliza la glicerina?')" class="shrink-0 bg-purple-500/10 border border-purple-500/20 text-purple-300 px-3 py-1.5 rounded-full text-[10px] font-bold hover:bg-purple-500/20 active:scale-95 transition-all">¿Glicerina y estabilidad?</button>
                    <button onclick="sendQuickQuery('¿Cómo mezclar menta y agua?')" class="shrink-0 bg-purple-500/10 border border-purple-500/20 text-purple-300 px-3 py-1.5 rounded-full text-[10px] font-bold hover:bg-purple-500/20 active:scale-95 transition-all">¿Mezclar menta y agua?</button>
                </div>

                <!-- Input de Escritura -->
                <div class="px-6 pb-8 pt-2 shrink-0 border-t border-white/5 bg-dark/45 backdrop-blur">
                    <form onsubmit="handleAIChatSubmit(event)" class="flex items-center gap-2.5">
                        <input type="text" id="ai-chat-input" placeholder="Pregunta sobre formulación..." class="flex-1 bg-panel/90 text-white rounded-2xl px-4 py-3.5 text-xs border border-white/10 focus:border-purple-500 focus:outline-none transition-all">
                        <button type="submit" id="ai-send-btn" class="w-12 h-12 rounded-2xl bg-purple-600 hover:bg-purple-500 text-white flex items-center justify-center shadow-lg shadow-purple-600/20 transition-colors active:scale-95 shrink-0">
                            <i id="ai-btn-icon" class="fa-solid fa-paper-plane"></i>
                        </button>
                    </form>
                </div>
            </main>
        </div>

        <!-- ========================================== -->
        <!-- MODAL DE CONFIGURACIÓN DE USUARIO (EXTRA)  -->
        <!-- ========================================== -->
        <div id="user-modal" class="hidden fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6">
            <div class="bg-panel w-full max-w-xs rounded-[2.5rem] p-6 shadow-2xl flex flex-col gap-4 text-left">
                <div>
                    <h3 class="text-lg font-black text-white">Editar Perfil</h3>
                    <p class="text-xs text-gray-400">Introduce tu correo para calcular tu nombre dinámico automáticamente.</p>
                </div>
                
                <div class="flex flex-col gap-3">
                    <div>
                        <label class="text-[10px] font-bold text-gray-400 uppercase block mb-1">Nombre Manual (Opcional)</label>
                        <input type="text" id="modal-name-input" placeholder="Roberto Telón" class="w-full bg-dark text-white rounded-xl px-3 py-2 text-xs border border-white/10 focus:outline-none focus:border-emerald-500">
                    </div>
                    <div>
                        <label class="text-[10px] font-bold text-gray-400 uppercase block mb-1">Correo Electrónico (Para cálculo)</label>
                        <input type="email" id="modal-email-input" placeholder="roberto.telon@galileo.edu" class="w-full bg-dark text-white rounded-xl px-3 py-2 text-xs border border-white/10 focus:outline-none focus:border-emerald-500">
                    </div>
                </div>

                <div class="flex gap-2 mt-2">
                    <button onclick="closeUserModal()" class="flex-1 bg-white/10 hover:bg-white/20 text-white rounded-xl py-2 text-xs font-bold transition-all">
                        Cancelar
                    </button>
                    <button onclick="saveUserModal()" class="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl py-2 text-xs font-bold transition-all">
                        Guardar
                    </button>
                </div>
            </div>
        </div>

        <!-- ========================================== -->
        <!-- MODAL DE DESCARGA / INSTALACIÓN PWA        -->
        <!-- ========================================== -->
        <div id="download-modal" class="hidden fixed inset-0 bg-black/85 backdrop-blur-sm z-50 flex items-center justify-center p-6">
            <div class="bg-panel w-full max-w-xs rounded-[2.5rem] p-6 shadow-2xl flex flex-col gap-4 text-left border border-white/10">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-lg">
                        <i class="fa-solid fa-cloud-arrow-down"></i>
                    </div>
                    <div>
                        <h3 class="text-base font-black text-white">Instalar Aplicación</h3>
                        <p class="text-[10px] text-gray-400">Guía de instalación móvil</p>
                    </div>
                </div>
                
                <div class="flex flex-col gap-3 text-xs text-gray-300">
                    <div class="bg-dark/60 p-3 rounded-2xl border border-white/5 flex gap-2.5">
                        <span class="w-5 h-5 rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center text-[10px] font-bold shrink-0">1</span>
                        <p class="leading-tight">Abre esta página en el navegador de tu celular (<span class="text-emerald-400">Chrome</span> o <span class="text-indigo-400">Safari</span>).</p>
                    </div>
                    <div class="bg-dark/60 p-3 rounded-2xl border border-white/5 flex gap-2.5">
                        <span class="w-5 h-5 rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center text-[10px] font-bold shrink-0">2</span>
                        <p class="leading-tight">En <strong>iOS (Safari)</strong>: Toca <i class="fa-solid fa-share-nodes text-indigo-400"></i> Compartir y selecciona <strong>"Agregar a Inicio"</strong>.</p>
                    </div>
                    <div class="bg-dark/60 p-3 rounded-2xl border border-white/5 flex gap-2.5">
                        <span class="w-5 h-5 rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center text-[10px] font-bold shrink-0">3</span>
                        <p class="leading-tight">En <strong>Android (Chrome)</strong>: Presiona <i class="fa-solid fa-ellipsis-vertical text-emerald-400"></i> Menú y elige <strong>"Instalar Aplicación"</strong>.</p>
                    </div>
                </div>

                <button onclick="closeDownloadModal()" class="w-full bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl py-2.5 text-xs font-bold transition-all active:scale-95">
                    Entendido
                </button>
            </div>
        </div>

    </div>

    <!-- Lógicas de Negocios, Fechas, Batería, Canvas y Web Speech API -->
    <script>
        // --- Gestión de Estados de Navegación (SPA) ---
        const mainView = document.getElementById('main-view');
        const subpageView = document.getElementById('subpage-view');
        const catalogView = document.getElementById('catalog-view');
        const formView = document.getElementById('form-view');
        const socialsView = document.getElementById('socials-view');
        const aiChatView = document.getElementById('ai-chat-view');
        const paymentView = document.getElementById('payment-view'); // Vista de Pago Dinámico

        function showSubpage() {
            hideAllViews();
            subpageView.classList.remove('hidden');
            subpageView.classList.add('fade-in');
        }

        function hideSubpage() {
            window.speechSynthesis.cancel();
            resetTTSButton();
            hideAllViews();
            mainView.classList.remove('hidden');
            mainView.classList.add('fade-in');
        }

        // --- Registro del Service Worker para de la PWA ---
        // Evitamos el registro si la app se ejecuta desde un protocolo 'blob:' en el entorno de pruebas
        if ('serviceWorker' in navigator && window.location.protocol.startsWith('http')) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('sw.js')
                    .then(reg => console.log('PWA Service Worker registrado con éxito', reg.scope))
                    .catch(err => console.error('Error al registrar el Service Worker de la PWA', err));
            });
        }

        function showCatalog() {
            hideAllViews();
            catalogView.classList.remove('hidden');
            catalogView.classList.add('fade-in');
        }

        function hideCatalog() {
            hideAllViews();
            mainView.classList.remove('hidden');
            mainView.classList.add('fade-in');
        }

        function showFormView() {
            hideAllViews();
            updateFormSummary();
            formView.classList.remove('hidden');
            formView.classList.add('fade-in');
        }

        function hideFormView() {
            hideAllViews();
            mainView.classList.remove('hidden');
            mainView.classList.add('fade-in');
        }

        // Navegación de Chatbot Gemini
        function showAIChat() {
            hideAllViews();
            aiChatView.classList.remove('hidden');
            aiChatView.classList.add('fade-in');
        }

        function hideAIChat() {
            window.speechSynthesis.cancel();
            hideAllViews();
            mainView.classList.remove('hidden');
            mainView.classList.add('fade-in');
        }

        function openAIChatWithContext(contextQuery) {
            showAIChat();
            sendQuickQuery(contextQuery);
        }

        function hideAllViews() {
            mainView.classList.add('hidden');
            subpageView.classList.add('hidden');
            catalogView.classList.add('hidden');
            formView.classList.add('hidden');
            socialsView.classList.add('hidden');
            aiChatView.classList.add('hidden');
            if (paymentView) paymentView.classList.add('hidden');
        }

        // --- Navegación del Flujo de Pago Dinámico ---
        function showPaymentView() {
            hideAllViews();
            paymentView.classList.remove('hidden');
            paymentView.classList.add('fade-in');
        }

        function hidePaymentView() {
            window.speechSynthesis.cancel();
            hideAllViews();
            catalogView.classList.remove('hidden');
            catalogView.classList.add('fade-in');
        }

        function goToPaymentFromStore() {
            updateFormSummary();
            showPaymentView();
        }

        function processPayment() {
            const toast = document.getElementById('payment-toast');
            toast.classList.remove('hidden');
            toast.classList.add('fade-in');
            
            setTimeout(() => {
                toast.classList.add('hidden');
                showFormView(); // Continuar a verificación tras pago
            }, 1800);
        }

        function goToFormFromStore() {
            showFormView();
        }

        // --- SISTEMA DINÁMICO: Hora en Zona 10 de Guatemala y Status Bar ---
        function updateDateAndClocks() {
            const now = new Date();

            const optionsTimeGT = {
                timeZone: 'America/Guatemala',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false
            };
            
            const optionsStatusDate = {
                weekday: 'short',
                day: 'numeric',
                month: 'short',
                hour: '2-digit',
                minute: '2-digit',
                hour12: false
            };

            try {
                const formatterGT = new Intl.DateTimeFormat('es-GT', optionsTimeGT);
                document.getElementById('header-time').innerText = formatterGT.format(now);

                const formatterStatus = new Intl.DateTimeFormat('es-GT', optionsStatusDate);
                let statusText = formatterStatus.format(now);
                statusText = statusText.replace(',', '');
                document.getElementById('system-date-time').innerText = statusText;

            } catch (err) {
                const fallbackTime = now.toLocaleTimeString();
                document.getElementById('header-time').innerText = fallbackTime;
                document.getElementById('system-date-time').innerText = now.toLocaleDateString() + " • " + fallbackTime.substring(0, 5);
            }
        }

        // --- SISTEMA DINÁMICO: Porcentaje de Carga de Batería Real ---
        function initBatteryStatus() {
            if ('getBattery' in navigator) {
                navigator.getBattery().then(function(battery) {
                    function updateBatteryUI() {
                        const levelPercentage = Math.round(battery.level * 100);
                        document.getElementById('battery-percent').innerText = levelPercentage + '%';
                        
                        const icon = document.getElementById('battery-icon');
                        icon.className = 'fa-solid ';
                        
                        if (battery.charging) {
                            icon.className += 'fa-battery-bolt text-emerald-400';
                        } else if (battery.level > 0.8) {
                            icon.className += 'fa-battery-full text-emerald-500';
                        } else if (battery.level > 0.5) {
                            icon.className += 'fa-battery-three-quarters text-gray-300';
                        } else if (battery.level > 0.25) {
                            icon.className += 'fa-battery-half text-amber-500';
                        } else {
                            icon.className += 'fa-battery-empty text-red-500 animate-pulse';
                        }
                    }

                    updateBatteryUI();
                    battery.addEventListener('levelchange', updateBatteryUI);
                    battery.addEventListener('chargingchange', updateBatteryUI);
                });
            } else {
                document.getElementById('battery-percent').innerText = '95%';
                document.getElementById('battery-icon').className = 'fa-solid fa-battery-three-quarters text-emerald-500';
            }
        }

        // --- SISTEMA DINÁMICO: Procesamiento de Nombre a partir del Email ---
        function parseNameFromEmail(email) {
            if (!email || !email.includes('@')) return "Estudiante Galileo";
            let preAt = email.split('@')[0];
            preAt = preAt.replace(/[\._\-]/g, ' ');
            return preAt.replace(/\b\w/g, c => c.toUpperCase());
        }

        // --- INSTALACIÓN DE LA APLICACIÓN (PWA) ---
        let deferredPrompt;
        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            deferredPrompt = e;
        });

        function installPWA() {
            if (deferredPrompt) {
                deferredPrompt.prompt();
                deferredPrompt.userChoice.then((choiceResult) => {
                    if (choiceResult.outcome === 'accepted') {
                        console.log('App instalada');
                    }
                    deferredPrompt = null;
                });
            } else {
                showDownloadInstructions();
            }
        }

        function showDownloadInstructions() {
            document.getElementById('download-modal').classList.remove('hidden');
        }

        function closeDownloadModal() {
            document.getElementById('download-modal').classList.add('hidden');
        }

        function updateProfileUI() {
            const storedEmail = localStorage.getItem('galileo_user_email') || 'roberto.telon@galileo.edu';
            const storedName = localStorage.getItem('galileo_user_name');

            let finalName = "Estudiante Galileo";

            if (storedName && storedName.trim().length > 0) {
                finalName = storedName;
            } else {
                finalName = parseNameFromEmail(storedEmail);
            }

            document.getElementById('user-display-name').innerText = finalName;
            document.getElementById('user-display-email').innerText = storedEmail;
            
            // Inyección dinámica de avatar en el perfil
            const dicebearUrl = `https://api.dicebear.com/7.x/notionists/svg?seed=${encodeURIComponent(storedEmail)}&backgroundColor=e2e8f0`;
            const avatarElement = document.getElementById('user-display-avatar');
            if (avatarElement) avatarElement.src = dicebearUrl;
            
            const formName = document.getElementById('form-name');
            const formEmail = document.getElementById('form-email');
            if (formName && !formName.value) formName.value = finalName;
            if (formEmail && !formEmail.value) formEmail.value = storedEmail;
        }

        // Acciones del modal de configuración de usuario para pruebas rápidas
        const userModal = document.getElementById('user-modal');

        function openUserModal() {
            document.getElementById('modal-name-input').value = localStorage.getItem('galileo_user_name') || '';
            document.getElementById('modal-email-input').value = localStorage.getItem('galileo_user_email') || 'roberto.telon@galileo.edu';
            userModal.classList.remove('hidden');
        }

        function closeUserModal() {
            userModal.classList.add('hidden');
        }

        function saveUserModal() {
            const nameVal = document.getElementById('modal-name-input').value.trim();
            const emailVal = document.getElementById('modal-email-input').value.trim();

            if (emailVal.length > 3 && emailVal.includes('@')) {
                localStorage.setItem('galileo_user_email', emailVal);
            }
            localStorage.setItem('galileo_user_name', nameVal);

            updateProfileUI();
            closeUserModal();
        }

        function logoutSession() {
            localStorage.removeItem('galileo_user_name');
            localStorage.setItem('galileo_user_email', 'invitado@galileo.edu');
            updateProfileUI();
        }

        // --- SISTEMA INTERACTIVO: Canvas Firma de Autoría "Ismatul" ---
        function initSignatureCanvas() {
            const canvas = document.getElementById('author-signature-canvas');
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            
            function resize() {
                const rect = canvas.getBoundingClientRect();
                canvas.width = rect.width * window.devicePixelRatio;
                canvas.height = rect.height * window.devicePixelRatio;
                ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
            }
            
            resize();
            window.addEventListener('resize', resize);
            
            let hue = 140; // Comienza en el verde esmeralda de Raoult's Mist
            let waveOffset = 0;
            
            function draw() {
                const w = canvas.width / window.devicePixelRatio;
                const h = canvas.height / window.devicePixelRatio;
                
                ctx.clearRect(0, 0, w, h);
                
                // Dibujo de ondas dinámicas traslúcidas de fondo
                waveOffset += 0.015;
                
                ctx.strokeStyle = `hsla(${(hue + 20) % 360}, 60%, 55%, 0.1)`;
                ctx.lineWidth = 1.5;
                ctx.beginPath();
                for (let i = 0; i < w; i++) {
                    const y = h / 2 + Math.sin(i * 0.025 + waveOffset) * 10;
                    if (i === 0) ctx.moveTo(i, y);
                    else ctx.lineTo(i, y);
                }
                ctx.stroke();

                ctx.strokeStyle = `hsla(${hue}, 70%, 50%, 0.08)`;
                ctx.beginPath();
                for (let i = 0; i < w; i++) {
                    const y = h / 2 + Math.sin(i * 0.015 - waveOffset) * 8;
                    if (i === 0) ctx.moveTo(i, y);
                    else ctx.lineTo(i, y);
                }
                ctx.stroke();

                // Degradado lineal dinámico animado por JavaScript para la firma
                hue = (hue + 0.3) % 360;
                const gradient = ctx.createLinearGradient(0, 0, w, 0);
                gradient.addColorStop(0, `hsla(${hue}, 80%, 70%, 1)`);
                gradient.addColorStop(0.5, `hsla(${(hue + 60) % 360}, 75%, 65%, 1)`);
                gradient.addColorStop(1, `hsla(${(hue + 120) % 360}, 80%, 75%, 1)`);
                
                // Configuración tipográfica de la firma de autoría "Ismatul"
                ctx.font = "italic bold 26px 'system-ui', -apple-system, sans-serif";
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                
                // Efecto de resplandor difuminado
                ctx.shadowColor = `hsla(${hue}, 80%, 65%, 0.35)`;
                ctx.shadowBlur = 12;
                ctx.fillStyle = gradient;
                ctx.fillText("Ismatul", w / 2, h / 2 - 2);
                
                // Limpieza de parámetros de sombreado
                ctx.shadowBlur = 0;
                
                requestAnimationFrame(draw);
            }
            draw();
        }

        // --- Lógica de la Tienda e Interactividad de Precios ---
        const prices = {
            '120ml': 95.00,
            '250ml': 145.00
        };

        let finalTotalGTQ = 0;
        let discountApplied = false;

        function changeQuantity(delta) {
            const input = document.getElementById('quantity-input');
            let val = parseInt(input.value) + delta;
            if (val < 1) val = 1;
            if (val > 99) val = 99;
            input.value = val;
            updateProductPrice();
        }

        function updateProductPrice() {
            const size = document.getElementById('size-select').value;
            const quantity = parseInt(document.getElementById('quantity-input').value) || 1;
            const priceSpan = document.getElementById('product-price');
            const unitPrice = prices[size] || 95.00;
            const totalPrice = unitPrice * quantity;
            
            priceSpan.style.opacity = '0.3';
            setTimeout(() => {
                priceSpan.innerHTML = `Q${totalPrice.toFixed(2)} <span class="text-xs font-normal text-gray-400">GTQ</span>`;
                priceSpan.style.opacity = '1';
            }, 150);

            updateFormSummary();
        }

        function updateFormSummary() {
            const size = document.getElementById('size-select').value;
            const variantSelect = document.getElementById('variant-select');
            const quantity = parseInt(document.getElementById('quantity-input').value) || 1;
            const variantText = variantSelect.options[variantSelect.selectedIndex].text;
            const unitPrice = prices[size] || 95.00;
            const totalPrice = unitPrice * quantity;

            finalTotalGTQ = totalPrice;
            discountApplied = false; // Reset discount when switching options

            // Restablecer vista de descuento
            const carnetInput = document.getElementById('carnet-input');
            if(carnetInput) carnetInput.value = '';
            const discountMsg = document.getElementById('discount-msg');
            if(discountMsg) discountMsg.classList.add('hidden');
            const discountErr = document.getElementById('discount-err');
            if(discountErr) discountErr.classList.add('hidden');

            document.getElementById('form-summary-variant').innerText = `${quantity}x ${variantText}`;
            document.getElementById('form-summary-price').innerText = `${size} (Q${totalPrice.toFixed(2)} GTQ)`;
            
            // Actualizar resumen en la página de pago dinámico
            const paymentVariant = document.getElementById('payment-summary-variant');
            const paymentPrice = document.getElementById('payment-summary-price');
            const btnProcessPayment = document.getElementById('btn-process-payment');
            
            if(paymentVariant) paymentVariant.innerText = `${quantity}x ${variantText}`;
            if(paymentPrice) paymentPrice.innerText = `Q${totalPrice.toFixed(2)} GTQ`;
            if(btnProcessPayment) btnProcessPayment.innerHTML = `<i class="fa-solid fa-lock"></i><span>Pagar Q${totalPrice.toFixed(2)}</span>`;
        }

        function applyStudentDiscount() {
            const carnet = document.getElementById('carnet-input').value.trim();
            const err = document.getElementById('discount-err');
            const msg = document.getElementById('discount-msg');
            
            // Exigir 8 dígitos para el número de carnet
            const carnetRegex = /^\d{8}$/;
            
            if (carnetRegex.test(carnet) && !discountApplied) {
                discountApplied = true;
                err.classList.add('hidden');
                msg.classList.remove('hidden');
                
                const discountedTotal = finalTotalGTQ * 0.85; // 15% de descuento
                
                document.getElementById('payment-summary-price').innerHTML = `
                    <span class="line-through text-gray-500 text-xs mr-2">Q${finalTotalGTQ.toFixed(2)}</span>
                    Q${discountedTotal.toFixed(2)} <span class="text-xs font-normal text-gray-400">GTQ</span>
                `;
                document.getElementById('btn-process-payment').innerHTML = `<i class="fa-solid fa-lock"></i><span>Pagar Q${discountedTotal.toFixed(2)}</span>`;
            } else if (!carnetRegex.test(carnet) && !discountApplied) {
                err.classList.remove('hidden');
                msg.classList.add('hidden');
            }
        }

        // --- Configuración de Voz (Hombre Latinoamericano) ---
        let preferredVoice = null;
        function loadVoices() {
            const voices = window.speechSynthesis.getVoices();
            preferredVoice = voices.find(v => 
                (v.lang.includes('es-MX') || v.lang.includes('es-US') || v.lang.includes('es-LA') || v.lang.includes('es-AR')) && 
                (v.name.includes('Jorge') || v.name.includes('Raul') || v.name.includes('Pablo') || v.name.includes('Carlos') || v.name.toLowerCase().includes('male'))
            );
            if (!preferredVoice) {
                preferredVoice = voices.find(v => v.lang.includes('es-MX') || v.lang.includes('es-US') || v.lang.includes('es-LA') || v.lang.includes('es-AR'));
            }
            if (!preferredVoice) {
                preferredVoice = voices.find(v => v.lang.includes('es'));
            }
        }
        window.speechSynthesis.onvoiceschanged = loadVoices;

        // --- Lógica de Redes Sociales
        function handleSocialClick(platformName, redirectUrl) {
            window.speechSynthesis.cancel();
            window.open(redirectUrl, '_blank');
        }

        // --- Lógica de Validación JavaScript y Envío ---
        function handleFormSubmission(event) {
            event.preventDefault();

            const nameInput = document.getElementById('form-name');
            const emailInput = document.getElementById('form-email');
            const termsInput = document.getElementById('form-terms');

            const errName = document.getElementById('error-name');
            const errEmail = document.getElementById('error-email');
            const errTerms = document.getElementById('error-terms');
            const toast = document.getElementById('toast');

            let isValid = true;

            if (nameInput.value.trim().length < 4) {
                errName.classList.remove('hidden');
                nameInput.classList.add('border-red-500');
                isValid = false;
            } else {
                errName.classList.add('hidden');
                nameInput.classList.remove('border-red-500');
                nameInput.classList.add('border-emerald-500');
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailInput.value.trim())) {
                errEmail.classList.remove('hidden');
                emailInput.classList.add('border-red-500');
                isValid = false;
            } else {
                errEmail.classList.add('hidden');
                emailInput.classList.remove('border-red-500');
                emailInput.classList.add('border-emerald-500');
            }

            if (!termsInput.checked) {
                errTerms.classList.remove('hidden');
                isValid = false;
            } else {
                errTerms.classList.add('hidden');
            }

            if (isValid) {
                localStorage.setItem('galileo_user_name', nameInput.value.trim());
                localStorage.setItem('galileo_user_email', emailInput.value.trim());
                updateProfileUI();

                toast.classList.remove('hidden');
                toast.classList.add('fade-in');

                const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdi73uhtV5Bch29gR6Yjd710w5hoZgkZCfMky9y3o6mD4UnxA/viewform?usp=header";

                setTimeout(() => {
                    toast.classList.add('hidden');
                    window.open(googleFormUrl, '_blank');
                    hideFormView();
                }, 1500);
            }
        }

        // --- Lógica de Text-to-Speech (Body Splash Explicación) ---
        const textToRead = "La industria cosmética demanda productos que integren bienestar sensorial con bases científicas sólidas. El body splash es una mezcla hidroalcohólica ligera cuya formulación implica equilibrar fenómenos fisicoquímicos simultáneos: Miscibilidad de fases polar (agua) y apolar (aceite esencial) mediada por alcohol anfipático. Reducción de presión de vapor por humectantes (glicerina, propilenglicol) según Ley de Raoult. Control de higroscopía para estabilidad en almacenamiento.";
        
        function toggleTTS() {
            const btn = document.getElementById('tts-btn');
            const icon = btn.querySelector('i');
            const span = btn.querySelector('span');

            if (window.speechSynthesis.speaking) {
                window.speechSynthesis.cancel();
                resetTTSButton();
                return;
            }

            const utterance = new SpeechSynthesisUtterance(textToRead);
            if (preferredVoice) {
                utterance.voice = preferredVoice;
            } else {
                utterance.lang = 'es-MX';
            }
            utterance.rate = 0.95;

            utterance.onstart = () => {
                icon.className = 'fa-solid fa-circle-stop text-xl animate-pulse';
                span.innerText = 'Detener Reproducción';
                btn.classList.replace('bg-emerald-600', 'bg-red-500');
                btn.classList.replace('hover:bg-emerald-500', 'hover:bg-red-400');
                btn.classList.replace('shadow-emerald-600/20', 'shadow-red-500/30');
                btn.classList.replace('border-emerald-400/30', 'border-red-400/30');
            };

            utterance.onend = () => {
                resetTTSButton();
            };

            window.speechSynthesis.speak(utterance);
        }

        function resetTTSButton() {
            const btn = document.getElementById('tts-btn');
            if(!btn) return;
            const icon = btn.querySelector('i');
            const span = btn.querySelector('span');
            
            icon.className = 'fa-solid fa-volume-high text-xl';
            span.innerText = 'Escuchar Explicación Científica';
            
            btn.classList.replace('bg-red-500', 'bg-emerald-600');
            btn.classList.replace('hover:bg-red-400', 'hover:bg-emerald-500');
            btn.classList.replace('shadow-red-500/30', 'shadow-emerald-600/20');
            btn.classList.replace('border-red-400/30', 'border-emerald-400/30');
        }

        // --- LÓGICA DE MÚSICA DE FONDO ---
        let isMusicPlaying = false;
        function toggleBGM() {
            const bgMusic = document.getElementById('bg-music');
            const bgmBtn = document.getElementById('bgm-btn');
            const bgmIcon = bgmBtn.querySelector('i');

            if (isMusicPlaying) {
                bgMusic.pause();
                bgmIcon.className = 'fa-solid fa-volume-xmark';
                bgmBtn.classList.remove('text-emerald-400');
                bgmBtn.classList.add('text-gray-400');
                isMusicPlaying = false;
            } else {
                bgMusic.volume = 0.15; // Volumen bajo (15%) para naturaleza
                bgMusic.play().then(() => {
                    bgmIcon.className = 'fa-solid fa-music';
                    bgmBtn.classList.remove('text-gray-400');
                    bgmBtn.classList.add('text-emerald-400');
                    isMusicPlaying = true;
                }).catch(err => {
                    console.error("La reproducción automática fue bloqueada.", err);
                });
            }
        }

        // --- SISTEMA INTEGRADOR DE GEMINI API (CON MEMORIA CONVERSACIONAL) ---
        let geminiChatHistory = []; // Variable global para guardar el historial de la conversación

        async function queryGemini(userQuery) {
            const apiKey = ""; // Llave asignada en runtime por el entorno
            const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;
            
            const systemPrompt = "Eres un consultor científico experto en fisicoquímica y formulación cosmética para la aplicación de RAOULT'S MIST de la Universidad Galileo. Tu objetivo es dar respuestas ALTAMENTE COHERENTES según la pregunta exacta que se te realice. Mantén el contexto de la conversación. Si el usuario pregunta sobre body splash o Ley de Raoult, explícalo de forma didáctica. Si hace una pregunta sobre otro tema distinto o de seguimiento (ej. '¿y por qué?'), respóndela de manera lógica basándote en el historial de nuestra conversación. Sé profesional, amigable, claro y responde en español.";
            
            // 1. Agregamos la pregunta actual del usuario al historial
            geminiChatHistory.push({ role: "user", parts: [{ text: userQuery }] });

            const payload = {
                contents: geminiChatHistory, // Enviamos toda la conversación en lugar de solo la última pregunta
                systemInstruction: { parts: [{ text: systemPrompt }] }
            };

            const maxRetries = 5;
            let currentDelay = 1000;

            for (let i = 0; i < maxRetries; i++) {
                try {
                    const response = await fetch(url, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(payload)
                    });
                    
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    
                    const result = await response.json();
                    const text = result.candidates?.[0]?.content?.parts?.[0]?.text;
                    
                    if (text) {
                        // 2. Si la IA responde correctamente, guardamos su respuesta en el historial
                        geminiChatHistory.push({ role: "model", parts: [{ text: text }] });
                        return text;
                    }
                    throw new Error("No se obtuvo respuesta de texto válida.");
                } catch (error) {
                    if (i === maxRetries - 1) {
                        // Si falla la red, eliminamos la última pregunta del usuario para no corromper el historial
                        geminiChatHistory.pop();
                        throw new Error("Disculpa, no puedo conectar con el servidor científico de Gemini en este momento. Inténtalo más tarde.");
                    }
                    await new Promise(resolve => setTimeout(resolve, currentDelay));
                    currentDelay *= 2; // Backoff exponencial (1s, 2s, 4s, 8s, 16s)
                }
            }
        }

        function appendMessageToHistory(sender, text, isAI = false) {
            const chatHistory = document.getElementById('ai-chat-history');
            const messageDiv = document.createElement('div');
            
            if (isAI) {
                messageDiv.className = "flex flex-col gap-1.5 self-start max-w-[85%] bg-panel rounded-[1.5rem] rounded-tl-none p-4 border border-purple-500/10 fade-in";
                
                // Sanitizar y limpiar texto de formato markdown básico de Gemini
                let formattedText = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                formattedText = formattedText.replace(/\*(.*?)\*/g, '<em>$1</em>');
                formattedText = formattedText.replace(/\n/g, '<br>');

                messageDiv.innerHTML = `
                    <p class="text-xs text-gray-300 leading-relaxed">${formattedText}</p>
                    <div class="flex items-center justify-between mt-1">
                        <button onclick="speakText(\`${text.replace(/`/g, '\\`').replace(/"/g, '&quot;')}\`)" class="text-purple-400 hover:text-purple-300 text-[10px] flex items-center gap-1 font-bold">
                            <i class="fa-solid fa-volume-high"></i> Escuchar
                        </button>
                        <span class="text-[8px] text-purple-400 font-bold uppercase tracking-wider">Gemini AI</span>
                    </div>
                `;
            } else {
                messageDiv.className = "flex flex-col gap-1.5 self-end max-w-[85%] bg-purple-600/30 rounded-[1.5rem] rounded-tr-none p-4 border border-purple-500/30 fade-in";
                messageDiv.innerHTML = `
                    <p class="text-xs text-purple-100 leading-relaxed">${text}</p>
                    <span class="text-[8px] text-purple-400 font-bold self-end uppercase">Estudiante</span>
                `;
            }
            
            chatHistory.appendChild(messageDiv);
            chatHistory.scrollTop = chatHistory.scrollHeight;
        }

        function speakText(text) {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(text);
            if (preferredVoice) {
                utterance.voice = preferredVoice;
            } else {
                utterance.lang = 'es-MX';
            }
            utterance.rate = 1.0;
            window.speechSynthesis.speak(utterance);
        }

        async function handleAIChatSubmit(event) {
            if (event) event.preventDefault();
            const input = document.getElementById('ai-chat-input');
            const userText = input.value.trim();
            if (!userText) return;

            input.value = "";
            appendMessageToHistory("Estudiante", userText, false);

            // Colocar indicador de "Pensando..."
            const chatHistory = document.getElementById('ai-chat-history');
            const thinkingDiv = document.createElement('div');
            thinkingDiv.id = "ai-thinking-loader";
            thinkingDiv.className = "flex items-center gap-2 self-start max-w-[85%] bg-panel rounded-[1.5rem] rounded-tl-none p-4 border border-purple-500/10 fade-in text-xs text-purple-400";
            thinkingDiv.innerHTML = `<i class="fa-solid fa-circle-notch animate-spin mr-1"></i> Gemini está analizando tu fórmula fisicoquímica...`;
            chatHistory.appendChild(thinkingDiv);
            chatHistory.scrollTop = chatHistory.scrollHeight;

            try {
                const aiResultText = await queryGemini(userText);
                document.getElementById('ai-thinking-loader').remove();
                appendMessageToHistory("Gemini AI", aiResultText, true);
            } catch (error) {
                document.getElementById('ai-thinking-loader').remove();
                appendMessageToHistory("Sistema", error.message, true);
            }
        }

        function sendQuickQuery(queryText) {
            document.getElementById('ai-chat-input').value = queryText;
            handleAIChatSubmit();
        }

        // --- INICIALIZADOR GLOBAL ---
        window.onload = function() {
            updateDateAndClocks();
            setInterval(updateDateAndClocks, 1000);
            initBatteryStatus();
            updateProfileUI();
            
            // Iniciar el Canvas de Autoría una vez que el DOM esté listo
            initSignatureCanvas();
            
            // Cargar Voces Latinas del SO
            loadVoices();
        }
    </script>
</body>
</html>