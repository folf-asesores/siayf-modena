/*
 * fm-principal.js
 * Creado el Feb 10, 2016, 10:15:58 AM
 *
 * @author Freddy Barrera
 */

$(document).ready(function() {
    
    /**
     * Define el KeyCode de algunas teclas especiales del teclado.
     */
    var Keys = {
        BACKESCAPE : 8,
        ENTER : 11,
        ESPACE : 32
    };

    var ThemeFM = {
        //Define el menú principal.
        mainMenu : $("#principal-menu"),
        // Define el botón que disparará el evento para mostrar u ocultar
        // el menú principal.
        mainMenuButton : $("#principal-movil-menu-boton"),
        //Define el menú secundario
        secondMenu : $("#secundario-menu"),
        // Define el botón que disparará el evento para mostrar u ocultar
        // el menú secundario.
        secondMenuButton : $("#secundario-movil-menu-boton"),
        //Define el menú de notificaciones
        notificacionesMenu : $("#notificaciones-menu"),
        // Define el botón que disparará el evento para mostrar u ocultar
        // el menú de notificaciones.
        notificacionesMenuButton : $("#boton-notificaciones"),
        // Define el cuadro de texto para la busqueda.
        searchInput : $('#principal-menu-buscar'),

        /**
         * Permite mostrar u ocultar el menú principal.
         */
        toggleMainMenu : function (){
            if(this.mainMenuButton.hasClass('cerrar-menu')){
                this.mainMenuButton.removeClass('cerrar-menu');
                this.mainMenu.removeClass('mostrar-menu');
                this.mainMenu.addClass('ocultar-menu');
            } else {
                this.mainMenuButton.addClass('cerrar-menu');
                this.mainMenu.addClass('mostrar-menu');
                this.mainMenu.removeClass('ocultar-menu');
            }
        },

        /**
         * Permite mostrar u ocultar el menú secundario.
         */
        toggleSecondaryMenu : function() {

            if(this.secondMenuButton.hasClass('cerrar-menu')){
                this.secondMenuButton.removeClass('cerrar-menu');
                this.secondMenu.removeClass('mostrar-menu');
                this.secondMenu.addClass('ocultar-menu');
            } else {
                this.secondMenuButton.addClass('cerrar-menu');
                this.secondMenu.addClass('mostrar-menu');
                this.secondMenu.removeClass('ocultar-menu');
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
    };

    /**
     * Agrega al botón principal el evento para mostrar u ocultar el menú
     * principal.
     */
    ThemeFM.mainMenuButton.on('click', function() {
        ThemeFM.toggleMainMenu();
    });

    /**
     * Agrega al botón secundario el evento para mostrar u ocultar el menú
     * secundario.
     */
    ThemeFM.secondMenuButton.on('click', function() {
        ThemeFM.toggleSecondaryMenu();
    });

    /**
     * Agrega al botón de notificaciones el evento para mostrar u ocultar el
     * menú de notificaciones.
     */
    ThemeFM.notificacionesMenuButton.on('click', function() {
        ThemeFM.toggleNotificacionesMenu();
    });

    /**
     * Agrega al menú princpal las barras de deslazamiento.
     */
    ThemeFM.mainMenu.perfectScrollbar();

    /**
     * Agrega al menú notificaciones las barras de deslazamiento.
     */
    ThemeFM.notificacionesMenu.perfectScrollbar();

    /**
     * Permite realizar la busqueda en el menú.
     * @param {KeyboardEvent} e evento del teclado que dispara la busqueda.
     */
    ThemeFM.searchInput.on('keyup', function(e) {
        ThemeFM.hideOpenedSubmenus();

        if (e.keyCode === Keys.ESPACE) {
            $(this).val($(this).val() + " ");
        }

        var searchValue = $(this).val().toLowerCase();

        $('.ui-menuitem', ThemeFM.mainMenu).each(function() {
            var menuSideValue = $.trim($('.ui-menuitem-text', this).text()).toLowerCase();

            if(menuSideValue.search(searchValue) > -1 
                    || searchValue.length === 0) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });

    window.ThemeFM = ThemeFM;

    /**
     * Permite mantener el titulo pegado al header.
     * @param {UIEvent} e evento de la ventana que dispara la acción.
     */
    $(window).on('scroll', function(e) {
        var html = document.documentElement,
            body = document.body,
            headerHeight = $('#principal-encabezado').height(),
            titleHeader = $('#encabezado-modulo-titulo');
            // TODO: Mover el contenido del titulo del modulo al header.
            //titleModule = $('#modulo-titulo');

        if((body.scrollTop > headerHeight
                || html.scrollTop > headerHeight)) {
            titleHeader.addClass('mostrar');
        } else {
            titleHeader.removeClass('mostrar');
        }
    });
});