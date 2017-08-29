/*
 * fm-secundario.js
 * Creado el Feb 10, 2016, 11:51:35 AM
 *
 * @author Freddy Barrera
 */

$(document).ready(function(){
    var Keys = {
        BACKESCAPE : 8,
        ENTER : 11,
        ESPACE : 32
    };

    var ThemeFM2 = {
        module : $("#modulo"),
        footer : $("#pie"),
        sidebar : $("#barra-lateral"),
        mainSidebarButton : $("#principal-movil-menu-boton"),
        secondaryMenu : $("#secundario-menu"),
        secondMenuButton : $("#secundario-movil-menu-boton"),
        //Define el menú de notificaciones
        notificacionesMenu : $("#notificaciones-menu"),
        // Define el botón que disparará el evento para mostrar u ocultar
        // el menú de notificaciones.
        notificacionesMenuButton : $("#boton-notificaciones"),
        // Define el cuadro de texto para la busqueda.
        searchInput : $('#principal-menu-buscar'),

        increaseSidebar : function() {
            this.sidebar.addClass('abrir');
            this.sidebar.removeClass('cerrar');
            this.module.addClass('reducir');
            this.footer.addClass('reducir');
        },

        decreaseSidebar : function() {
            if(!this.mainSidebarButton.hasClass('cerrar-menu')){
                this.sidebar.addClass('cerrar');
                this.sidebar.removeClass('abrir');
                this.module.removeClass('reducir');
                this.footer.removeClass('reducir');
            }
        },

        toggleSidebarButton : function() {
            if(this.mainSidebarButton.hasClass('cerrar-menu')){
                this.sidebar.addClass('cerrar');
                this.sidebar.removeClass('abrir');
                this.mainSidebarButton.removeClass('cerrar-menu');

                if(!this.isMobile()) {
                    this.module.removeClass('reducir');
                    this.footer.removeClass('reducir');
                }
            } else {
                this.sidebar.addClass('abrir');
                this.sidebar.removeClass('cerrar');
                this.mainSidebarButton.addClass('cerrar-menu');

                if(!this.isMobile()) {
                    this.module.addClass('reducir');
                    this.footer.addClass('reducir');
                }
            }
        },

        toggleSecondaryMenu : function() {
            if(this.secondMenuButton.hasClass('cerrar-menu')) {
                this.secondMenuButton.removeClass('cerrar-menu');
                this.secondaryMenu.removeClass('mostrar-menu');
                this.secondaryMenu.addClass('ocultar-menu');
            } else {
                this.secondMenuButton.addClass('cerrar-menu');
                this.secondaryMenu.addClass('mostrar-menu');
                this.secondaryMenu.removeClass('ocultar-menu');
            }
        },

        /**
         * Permite mostrar u ocultar el menú de notificaciones.
         */
        toggleNotificacionesMenu : function() {
            if(this.notificacionesMenuButton.hasClass('cerrar-menu')){
                this.notificacionesMenuButton.removeClass('cerrar-menu');
                this.notificacionesMenu.removeClass('mostrar-menu');
                this.notificacionesMenu.addClass('ocultar-menu');
            } else {
                this.notificacionesMenuButton.addClass('cerrar-menu');
                this.notificacionesMenu.addClass('mostrar-menu');
                this.notificacionesMenu.removeClass('ocultar-menu');
            }
        },

        /**
         * Oculta los submenús del ménu principal.
         */
        hideOpenedSubmenus : function() {
            if(!this.mainSidebarButton.hasClass('cerrar-menu')){
                $('.ui-panelmenu-content', this.mainMenu).each( function() {
                    $(this).hide();
                });

                $('.ui-panelmenu-header', this.mainMenu).each( function() {
                    $(this).removeClass('ui-state-active');
                    var icon = $('.ui-icon', this);

                    icon.removeClass('ui-icon-triangle-1-s');
                    icon.addClass('ui-icon-triangle-1-e');
                });
            }
        },

        /**
         * Identifica si es un dispositivo móvil.
         */
        isMobile : function () {
            return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent));
        }
    };

    /**
     * Agrega el botón principal el evento para mostrar u ocultar el menú
     * principal.
     */
    ThemeFM2.mainSidebarButton.on('click', function() {
        ThemeFM2.toggleSidebarButton();
    });

    /**
     * Agrega el botón principal el evento para mostrar u ocultar el menú
     * secundario.
     */
    ThemeFM2.secondMenuButton.on('click', function() {
        ThemeFM2.toggleSecondaryMenu();
    });
    
    /**
     * Agrega al botón de notificaciones el evento para mostrar u ocultar el
     * menú de notificaciones.
     */
    ThemeFM2.notificacionesMenuButton.on('click', function() {
        ThemeFM2.toggleNotificacionesMenu();
    });

    /**
     * Añade el evento que aumenta el tamaño del menú cuando el mouse (ratón)
     * entra en el área de la barra lateral. También añade el evento disminuir
     * cuando el mouse sale del área de la barra lateral.
     */
    if(!ThemeFM2.isMobile()) {
        ThemeFM2.sidebar
            .on("mouseenter", function() {
                ThemeFM2.increaseSidebar();
            })
            .on("mouseleave", function() {
                ThemeFM2.hideOpenedSubmenus();
                ThemeFM2.decreaseSidebar();
            });
    }

    /**
     * Permite ralizar la busqueda en el menú.
     * @param {KeyboardEvent} e evento del teclado que dispara esta acción.
     */
    ThemeFM2.searchInput.on('keyup', function(e) {
            ThemeFM2.hideOpenedSubmenus();

        if (e.keyCode === Keys.ESPACE) {
            $(this).val($(this).val() + " ");
        }

        var searchValue = $(this).val().toLowerCase();

        $('.ui-menuitem', ThemeFM2.sidebar).each(function() {
            var menuSideValue = $.trim($('.ui-menuitem-text', this).text()).toLowerCase();

            if(menuSideValue.search(searchValue) > -1 || searchValue.length === 0) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });

    ThemeFM2.sidebar.perfectScrollbar();

    window.ThemeFM2 = ThemeFM2;

    /**
     * Permite mantener el titulo pegado al header.
     * @param {UIEvent} e evento de la ventana que dispara esta acción.
     */
    $(window).on('scroll', function(e) {
        var html = document.documentElement,
            body = document.body,
            title = $('#encabezado-modulo-titulo'),
            headerHeight = $('#principal-encabezado').height();

        if((body.scrollTop > headerHeight
                || html.scrollTop > headerHeight)) {
            title.addClass('mostrar');
        } else {
            title.removeClass('mostrar');
        }
    });
});