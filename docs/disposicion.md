# Disposición

#### Contenido

[Responsividad](#responsividad)

[Contenedor](#contenedor)

[Ancho](#Ancho)

[Alto](#alto)

<!--
[Visibilidad](#visibilidad)

[Flotantes](#flotantes)

[Overflows](#overflows)

[Box sizing](#box-sizing)

[Transiciones](#transiciones)

[Cajas vacias](#cajas-vacias)
-->

## Responsividad

<table>
    <thead>
        <tr>
            <th colspan="3">Modo responsivo</th>
        </tr>
        <tr>
            <th>Grupo clase</th>
            <th>Nombre clase</th>
            <th>Instrucciones</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan="3">Modo responsivo</td>
            <td>fm-responsivo</td>
            <td>Hace al elemento responsivo por medio de 
                <i><a href="http://www.w3schools.com/css/css3_mediaqueries.asp" target="blank">media queries</a></i>.
                Por ejemplo:<br/>
                Si el ancho de la pantalla es menor que 1200px y mayor que 960px, el ancho del elemento será de 33%<br/> 
                Si el ancho de la pantalla es menor que 960px y mayor que 640px, el ancho del elemento será de 50%<br/> 
                Si el ancho de la pantalla es menor que 640px, el ancho del elemento será de 100%<br/> 
                Es así como el ancho del elemento se ajusta a la resolución de la pantalla.<br/>
                Cambie el tamaño de la ventana del navegador para ver los cambios de los cuadros verdes(fm-contenedor-X) de abajo.
            </td>
        </tr>
        <tr>
            <td>fm-responsivo-50</td>
            <td>Hace al elemento responsivo por medio de
                <i><a href="http://www.w3schools.com/css/css3_mediaqueries.asp" target="blank">media queries</a></i>.
                Por ejemplo:<br/>
                Si el ancho de la pantalla es menor que 1200px y mayor que 960px, el ancho del elemento será de 50%<br/> 
                Si el ancho de la pantalla es menor que 960px, el ancho del elemento será de 100%<br/>
            </td>
        </tr>
        <tr>
            <td>fm-responsivo100</td>
            <td>Hace al elemento responsivo por medio de
                <i><a href="http://www.w3schools.com/css/css3_mediaqueries.asp" target="blank">media queries</a></i>.
                Por ejemplo:<br/>
                Si el ancho de la pantalla es menor que 1200px, el ancho del elemento será de 100%<br/>
            </td>
        </tr>
    </tbody>
</table>

## Contenedor

<table>
    <thead>
        <tr>
            <th colspan="3">Contenedor</th>
        </tr>
        <tr>
            <th>Grupo clase</th>
            <th>Nombre clase</th>
            <th>Instrucciones</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan="3">Contenedores (para la disposición de responsiva)</td>
        </tr>
        <tr>
            <td>
                fm-contenedor-100<br/>
                fm-contenedor-96<br/>
                fm-contenedor-90<br/>
                fm-contenedor-85<br/>
                fm-contenedor-80<br/>
                fm-contenedor-75<br/>
                fm-contenedor-70<br/>
                fm-contenedor-60<br/>
                fm-contenedor-50<br/>
                fm-contenedor-40<br/>
                fm-contenedor-33<br/>
                fm-contenedor-30<br/>
                fm-contenedor-25<br/>
                fm-contenedor-20<br/>
                fm-contenedor-10<br/>
                fm-contenedor-5<br/>
            </td>
            <td>
                fm-contenedor-X es parte esencial de la disposición 
                de la rejilla, donde el número X define el ancho de 
                la celda. Para hacer un fm-contenedor-X responsivo, 
                una de las clases de estilo fm-responsivo (descritas en el apartado anterior) debe 
                añadirse. Además, ya que flotan, una clase llamada 
                fm-contenedor debe ser el padre para limpiar los 
                flotadores.<br/>
                Cambie el tamaño de la ventana del navegador para 
                ver los cambios de los diferentes cuadros de colores de abajo.
            </td>
        </tr>
        <tr>
            <td>fm-contenedor-con-sangria</td>
            <td>fm-contenedor-con-sangria es opcional esta clase añade una sangria interior al fm-contenedor-X.</td>
        </tr>
    </tbody>
</table>

## Alto

<table>
    <thead>
        <tr>
            <th colspan="3">Alto</th>
        </tr>
        <tr>
            <th>Grupo clase</th>
            <th>Nombre clase</th>
            <th>Instrucciones</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Alto con valores especiales</td>
            <td>
                fm-height-100<br/>
                fm-height-90<br/>
                fm-height-80<br/>
                fm-height-70<br/>
                fm-height-60<br/>
                fm-height-50<br/>
                fm-height-40<br/>
                fm-height-30<br/>
                fm-height-20<br/>
                fm-height-10<br/>
            </td>
            <td>
                Define el alto usando porcentajes.
            </td>
        </tr>
    </tbody>
</table>

## Ancho

<table>
    <thead>
        <tr>
            <th colspan="3">Ancho</th>
        </tr>
        <tr>
            <th>Grupo clase</th>
            <th>Nombre clase</th>
            <th>Instrucciones</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td >Ancho con valores especiales</td>
            <td>
                fm-width-100<br/>
                fm-width-90<br/>
                fm-width-80<br/>
                fm-width-70<br/>
                fm-width-60<br/>
                fm-width-50<br/>
                fm-width-45<br/>
                fm-width-40<br/>
                fm-width-33<br/>
                fm-width-30<br/>
                fm-width-25<br/>
                fm-width-20<br/>
                fm-width-10<br/>
            </td>
            <td>
                Define el ancho usando porcentajes. Al añadir la clase fm-responsivo le permite adaptivilidad.
            </td>
        </tr>
    </tbody>
</table>
