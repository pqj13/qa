INSTRUCCIONES DE LOS SHORTCODES — quintana-abogados.com
=======================================================

Guía de los shortcodes "qa/..." del diseño editorial y de la sección de Noticias.

  - Plantillas de los shortcodes:  layouts/shortcodes/qa/
  - Estilos:                        assets/css/custom.css
  - Plantillas de Noticias:         layouts/blog/

Este archivo está escrito para leerse bien tanto en un editor de texto como renderizado.


CONTENIDO
---------

   1. Cómo se escribe un shortcode
   2. Cómo funcionan los enlaces
   3. qa/hero      Cabecera de portada (pantalla completa)
   4. qa/section   Encabezado de sección
   5. qa/steps     Lista editorial (con o sin numeración)
   6. qa/step      Cada fila de qa/steps
   7. qa/grid      Rejilla de tarjetas
   8. qa/card      Tarjeta (con color de fondo a elegir)
   9. qa/stat      Tarjeta de cifra
  10. qa/ledger    Lista sencilla con viñetas
  11. qa/quote     Cita destacada
  12. qa/cta       Banda de contacto
  13. qa/lawyer    Ficha de abogado
  14. qa/button    Botón
  15. qa/pill      Píldora o etiqueta
  16. qa/actions   Fila de botones
  17. qa/showcase  Imagen destacada a lo ancho
  18. qa/split     Pantalla dividida: lista a la izquierda, panel a la derecha
  19. qa/split-item Cada elemento de qa/split
  20. Noticias: cómo publicar una noticia
  21. Menú de navegación y menús anidados
  22. Datos de contacto compartidos (hugo.yaml)
  23. Iconos disponibles
  24. Shortcodes de Hextra que siguen funcionando
  25. Errores frecuentes
  26. Plantilla para una página nueva


-------------------------------------------------------------------------------
1. CÓMO SE ESCRIBE UN SHORTCODE
-------------------------------------------------------------------------------

Siempre con ángulos:  {{< ... >}}     (nunca con {{% ... %}})

Hay tres formas:

  A) Shortcode SIN contenido interior:

       {{< qa/button text="Contacto" link="contacto" >}}

  B) Shortcode CON contenido interior (texto Markdown entre apertura y cierre):

       {{< qa/card title="Penal" >}}
       Texto de la tarjeta. Admite **negrita**, *cursiva* y [enlaces](/contacto).
       {{< /qa/card >}}

  C) Shortcode que ADMITE contenido, pero no se lo pones: ciérralo con  />}}

       {{< qa/section title="Nuestros abogados" />}}

  Cada ficha de esta guía indica si el shortcode admite contenido interior.

Reglas de los parámetros:

  - Siempre entre comillas dobles:  title="Texto"
  - Pueden ir en una línea o repartidos en varias líneas.
  - Si un parámetro dice "admite Markdown", puedes usar *cursiva*, **negrita** y [enlaces](url).
  - Para comillas dentro del texto, usa comillas tipográficas “así”.
  - Los valores sí/no se escriben como texto:  numbered="false",  intl="true"


-------------------------------------------------------------------------------
2. CÓMO FUNCIONAN LOS ENLACES
-------------------------------------------------------------------------------

Todos los parámetros de enlace (link, primaryLink, secondaryLink, pillLink) funcionan igual:

  contacto                  → /contacto/ en el idioma de la página (ES, /en/, /fr/)   ← RECOMENDADO
  /contacto                 → lo mismo (se ignora la barra inicial)
  servicios/penal           → subpágina, también en el idioma de la página
  https://...               → enlace externo; se abre en una pestaña nueva
  tel:+34947273101          → llama por teléfono
  mailto:correo@dominio.es  → abre el correo
  #ancla                    → salta a una sección de la misma página

  ¡OJO! Las áreas (servicios/penal, servicios/familia...) solo existen en español.
  En las páginas EN y FR no enlaces a ellas: darían error 404.


-------------------------------------------------------------------------------
3. qa/hero — CABECERA DE PORTADA
-------------------------------------------------------------------------------

Qué hace
  Titular grande en serif, entradilla, hasta dos botones y una línea final.
  Ocupa TODA la altura de la pantalla (menos la barra de navegación) y centra
  el contenido verticalmente.

Contenido interior
  Opcional. Es la entradilla bajo el titular (admite Markdown).

Parámetros
  - title          Opcional. Titular. Admite Markdown: lo escrito entre *asteriscos*
                   sale en cursiva y color granate.
                   Si no se pone, se usa el "title" de la página.
  - pill           Opcional. Píldora pequeña encima del titular. Sin él, no aparece.
  - pillLink       Opcional. Enlace de la píldora (añade una flecha →).
  - primary        Opcional. Texto del botón principal (negro; granate al pasar el ratón).
  - primaryLink    Obligatorio si hay "primary". Enlace del botón principal.
  - secondary      Opcional. Texto del botón secundario (transparente con borde).
  - secondaryLink  Obligatorio si hay "secondary". Enlace del botón secundario.
  - secondaryIcon  Opcional. Icono del botón secundario (ver apartado 23).
  - note           Opcional. Línea pequeña gris bajo los botones. Admite Markdown.

A tener en cuenta
  - Úsalo una sola vez por página y al principio: genera el título principal (h1).
  - En la portada, si hay qa/hero, no se imprime el título automático.
  - No lo uses en otras páginas: allí el título automático saldría duplicado.

Ejemplo (el actual de la portada)

  {{< qa/hero
    title="Abogados en Burgos desde hace *más de 40 años*"
    primary="Concierte una cita"
    primaryLink="contacto"
    secondary="947 27 31 01"
    secondaryLink="tel:+34947273101"
    secondaryIcon="phone"
    note="c/ Santander 11, 2º C · 09004 Burgos"
  >}}
  **Abogado:** del lat. *advocatus (ad auxilium vocatus)*: el llamado para auxiliar.
  {{< /qa/hero >}}


-------------------------------------------------------------------------------
4. qa/section — ENCABEZADO DE SECCIÓN
-------------------------------------------------------------------------------

Qué hace
  Abre una sección nueva con espacio superior (64 px): antetítulo pequeño en
  mayúsculas granate, título en serif y entradilla opcional.
  No "envuelve" nada: se coloca encima de lo que venga después.

Contenido interior
  Opcional. Entradilla gris bajo el título (admite Markdown).

Parámetros
  - title     Recomendado. Título de la sección (h2). Admite Markdown.
  - eyebrow   Opcional. Antetítulo pequeño en mayúsculas granate.
  - id        Opcional. Ancla para enlazar con #id. Por defecto se crea a partir
              del título ("Diversas áreas" → #diversas-áreas).
  - align     Opcional. "center" para centrar. Por defecto, a la izquierda.

Ejemplos

  {{< qa/section eyebrow="Áreas de práctica" title="Diversas áreas del Derecho" >}}
  Asesoramiento y defensa en los siguientes órdenes jurisdiccionales.
  {{< /qa/section >}}

  {{< qa/section eyebrow="Equipo" title="Nuestros abogados" />}}

  {{< qa/section title="Preguntas frecuentes" align="center" id="faq" />}}


-------------------------------------------------------------------------------
5. qa/steps — LISTA EDITORIAL (CON O SIN NUMERACIÓN)
-------------------------------------------------------------------------------

Qué hace
  Lista de filas separadas por líneas finas, al estilo de un periódico:

    01   Título en serif        Texto explicativo en gris
                                Más información →
    ─────────────────────────────────────────────────────
    02   Título en serif        Texto explicativo...

  En móvil cada fila se apila (número, título y texto uno debajo de otro).
  Sirve para pasos de un procedimiento, fases, listados de áreas, etc.
  Es el que se usa en "Diversas áreas del Derecho" de la portada (sin numeración).

Contenido interior
  Obligatorio. Uno o varios qa/step (apartado 6). Nada más.

Parámetros
  - numbered   Opcional. "false" oculta los números. Por defecto se numera 01, 02, 03...
  - start      Opcional. Número por el que empieza la cuenta. Por defecto 1.
               Útil para continuar una lista partida: start="4" → 04, 05...
  - layout     Opcional. Forma de la lista:
                 "rows"  filas a lo ancho: título a la izquierda y texto a la
                         derecha, separadas por líneas finas (por defecto).
                 "line"  línea vertical a la izquierda con un punto granate por
                         elemento; título, texto y enlace uno debajo de otro.
                         Es el que usa la página de Servicios.

  Esquema de layout="line":

    ●  Penal
    │  Defensa, asistencia e intervención...
    │  Más información →
    │
    ●  Familia
    │  Asesoramiento y defensa en asuntos de familia...

Ejemplos

  Numerada (pasos de un procedimiento):

  {{< qa/steps >}}
    {{< qa/step title="Primera consulta" >}}
    Estudiamos su caso y la documentación disponible.
    {{< /qa/step >}}
    {{< qa/step title="Estrategia" >}}
    Le explicamos las opciones y los plazos.
    {{< /qa/step >}}
  {{< /qa/steps >}}

  Sin numeración y con enlaces, en filas (portada):

  {{< qa/steps numbered="false" >}}
    {{< qa/step title="Penal" link="servicios/penal" more="Más información" >}}
    Defensa, asistencia e intervención en todo tipo de procedimientos penales.
    {{< /qa/step >}}
  {{< /qa/steps >}}

  Sin numeración, en línea vertical (página de Servicios):

  {{< qa/steps numbered="false" layout="line" >}}
    {{< qa/step title="Penal" link="servicios/penal" more="Más información" >}}
    Defensa, asistencia e intervención en todo tipo de procedimientos penales.
    {{< /qa/step >}}
  {{< /qa/steps >}}


-------------------------------------------------------------------------------
6. qa/step — CADA FILA DE qa/steps
-------------------------------------------------------------------------------

Qué hace
  Una fila de la lista. Si lleva "link", toda la fila es clicable: al pasar el
  ratón el título se pone granate y la flecha se desplaza.

Contenido interior
  Opcional. Texto explicativo (admite Markdown y varios párrafos).
  Si no pones texto, ciérralo con />}}

Parámetros
  - title   Obligatorio. Título en serif. Admite Markdown.
  - label   Opcional. Sustituye al número automático por un texto (p. ej. "Fase 1").
            No se muestra si la lista tiene numbered="false".
  - link    Opcional. Enlace de la fila completa.
  - more    Opcional. Texto del enlace granate con flecha (p. ej. "Más información").
            Solo tiene sentido si hay "link".

A tener en cuenta
  - Siempre dentro de qa/steps; fuera de él no se numera ni se alinea.
  - No pongas [enlaces](...) en el texto de una fila que ya tiene "link".

Ejemplo

  {{< qa/step title="Recurso de alzada" label="Fase 2" link="servicios/administrativo" more="Ver más" >}}
  Se interpone ante el órgano superior en el plazo de un mes.
  {{< /qa/step >}}


-------------------------------------------------------------------------------
7. qa/grid — REJILLA DE TARJETAS
-------------------------------------------------------------------------------

Qué hace
  Coloca tarjetas (qa/card) o cifras (qa/stat) en columnas.

Contenido interior
  Obligatorio. Solo shortcodes qa/card o qa/stat (sin texto suelto).

Parámetros
  - cols   Opcional. Columnas en escritorio: "2", "3" o "4". Por defecto "3".

Columnas según el tamaño de pantalla
  - Móvil (menos de 640 px):     siempre 1 columna
  - Tableta (640 a 1023 px):     siempre 2 columnas
  - Escritorio (1024 px o más):  las indicadas en "cols"

Ejemplo

  {{< qa/grid cols="2" >}}
    {{< qa/card title="Penal" >}}Texto...{{< /qa/card >}}
    {{< qa/card title="Familia" >}}Texto...{{< /qa/card >}}
  {{< /qa/grid >}}


-------------------------------------------------------------------------------
8. qa/card — TARJETA (CON COLOR DE FONDO A ELEGIR)
-------------------------------------------------------------------------------

Qué hace
  Tarjeta con esquinas redondeadas y borde fino. Si lleva "link", toda la
  tarjeta es clicable. Orden: icono → etiqueta → título → texto → "más".

Contenido interior
  Opcional. Texto de la tarjeta (admite Markdown y varios párrafos).

Parámetros
  - title   Recomendado. Título en serif (h3). Admite Markdown.
  - label   Opcional. Etiqueta pequeña encima del título ("01", "Teléfono"...).
  - icon    Opcional. Icono en un cuadradito, arriba del todo (ver apartado 23).
  - link    Opcional. Enlace de la tarjeta completa.
  - more    Opcional. Texto del enlace granate con flecha. Solo con "link".
  - bg      Opcional. COLOR DE FONDO. Ver abajo.
  - text    Opcional. Color del texto: "light" (claro) o "dark" (oscuro). Ver abajo.

Color de fondo (bg)

  Colores predefinidos (se adaptan solos al modo oscuro):

    bg="paper"    Blanco con borde fino (es el valor por defecto).
    bg="sand"     Gris piedra muy claro, sin borde.
    bg="accent"   Granate corporativo #a10d2a, con texto blanco automático.
    bg="dark"     Negro #121212, con texto blanco automático.

  Cualquier otro color CSS:

    bg="#f4efe6"
    bg="#1d4f91"
    bg="rgb(244, 239, 230)"
    bg="hsl(220 40% 20%)"

  Con un color propio, indica también el color del texto para que se lea bien:

    text="dark"    Para fondos CLAROS. Texto oscuro siempre, también en modo oscuro.
    text="light"   Para fondos OSCUROS. Texto blanco.

  Regla rápida: fondo claro → text="dark"   ·   fondo oscuro → text="light"

  Con "accent" y "dark" no hace falta poner "text": ya usan texto claro.

A tener en cuenta
  - No pongas [enlaces](...) en el texto de una tarjeta que ya tiene "link".
  - Un color propio es el mismo en modo claro y oscuro; los predefinidos se adaptan.

Ejemplos

  Tarjeta informativa:

  {{< qa/card label="01" title="Penal" >}}
  Defensa, asistencia e intervención en todo tipo de procedimientos penales.
  {{< /qa/card >}}

  Tarjeta enlazada con icono:

  {{< qa/card icon="phone" label="Teléfono" title="947 27 31 01" link="tel:+34947273101" more="Llamar" >}}
  Concierte una cita con nosotros.
  {{< /qa/card >}}

  Tarjeta granate:

  {{< qa/card title="Urgencias penales" bg="accent" link="contacto" more="Contactar" >}}
  Asistencia en comisaría y juzgado de guardia.
  {{< /qa/card >}}

  Color propio claro (crema) con texto oscuro:

  {{< qa/card title="Horario de verano" bg="#f4efe6" text="dark" >}}
  Julio y agosto: de 9:00 a 14:30.
  {{< /qa/card >}}

  Color propio oscuro (azul) con texto claro:

  {{< qa/card title="English speaking lawyers" bg="#1d4f91" text="light" />}}


-------------------------------------------------------------------------------
9. qa/stat — TARJETA DE CIFRA
-------------------------------------------------------------------------------

Qué hace
  Tarjeta con una cifra grande en serif. Pensada para qa/grid cols="4".
  (Ahora no se usa en ninguna página, pero sigue disponible.)

Contenido interior
  No.

Parámetros
  - label    Obligatorio. Etiqueta superior ("Experiencia").
  - value    Obligatorio. La cifra o dato ("40", "Burgos"). Texto normal.
  - accent   Opcional. Sufijo pegado a la cifra, en granate ("+", "%").
  - note     Opcional. Nota pequeña debajo. Admite Markdown.

Ejemplo

  {{< qa/grid cols="4" >}}
    {{< qa/stat label="Experiencia" value="40" accent="+" note="años de ejercicio" >}}
    {{< qa/stat label="Idiomas" value="3" note="Español, inglés y francés" >}}
  {{< /qa/grid >}}


-------------------------------------------------------------------------------
10. qa/ledger — LISTA SENCILLA CON VIÑETAS
-------------------------------------------------------------------------------

Qué hace
  Lista con viñetas granates, letra algo mayor y ancho limitado para leerse
  cómodamente. Sin fondo ni numeración.

Contenido interior
  Obligatorio. Una lista Markdown (cada línea empieza por "* " o "- ").

Parámetros
  Ninguno.

Ejemplo

  {{< qa/ledger >}}
  * Lealtad a los clientes.
  * Competencia profesional.
  * Prevención de conflictos de intereses.
  {{< /qa/ledger >}}


-------------------------------------------------------------------------------
11. qa/quote — CITA DESTACADA
-------------------------------------------------------------------------------

Qué hace
  Cita centrada en serif grande, con comillas granates y líneas finas arriba y
  abajo. Deja espacio de sección encima.

Contenido interior
  Obligatorio. El texto de la cita (admite Markdown).

Parámetros
  - cite   Opcional. Autor o fuente; sale debajo precedido de "—". Admite Markdown.

Ejemplo

  {{< qa/quote cite="Código Deontológico de la Abogacía Española" >}}
  La honradez, probidad, rectitud, lealtad, diligencia y veracidad son virtudes...
  {{< /qa/quote >}}

  Para citas cortas dentro del texto normal basta con Markdown:  > texto


-------------------------------------------------------------------------------
12. qa/cta — BANDA DE CONTACTO
-------------------------------------------------------------------------------

Qué hace
  Banda negra (gris con borde en modo oscuro) con título, texto, el teléfono
  del despacho en grande y un botón. Deja espacio de sección encima.

Contenido interior
  Opcional. Texto bajo el título (admite Markdown).

Parámetros
  - title     Obligatorio. Título en serif. Admite Markdown.
  - eyebrow   Opcional. Antetítulo pequeño en mayúsculas.
  - button    Opcional. Texto del botón. Sin él, no hay botón.
  - link      Opcional. Enlace del botón. Por defecto "contacto".
  - intl      Opcional. "true" muestra el teléfono en formato internacional
              "(+34) 947 27 31 01". Recomendado en EN y FR.

A tener en cuenta
  - El teléfono NO se escribe aquí: sale de hugo.yaml (apartado 22).
  - Es la tarjeta que cierra todas las páginas de servicios y áreas (sustituyó a
    la antigua franja "→ Contacte con nosotros" del final).
  - Las noticias la llevan automáticamente al final (apartado 20); no hace falta
    escribirla en cada noticia.

Ejemplos

  {{< qa/cta title="Concierte una cita con nosotros" button="Contacto" >}}
  Puede contactar con nosotros por teléfono o a través de nuestro formulario de contacto.
  {{< /qa/cta >}}

  {{< qa/cta title="Contact us" button="Contact us" intl="true" />}}


-------------------------------------------------------------------------------
13. qa/lawyer — FICHA DE ABOGADO
-------------------------------------------------------------------------------

Qué hace
  Tarjeta con nombre en serif, cargo, etiquetas (colegiación, idiomas) y
  biografía separada por una línea fina. Las fichas se apilan una bajo otra.

Contenido interior
  Opcional. Biografía (admite Markdown y varios párrafos).

Parámetros
  - name    Obligatorio. Nombre completo. Crea también un ancla
            (p. ej. #pablo-quintana-jabato).
  - role    Opcional. Línea gris bajo el nombre. Admite Markdown.
  - tags    Opcional. Etiquetas grises, SEPARADAS POR PUNTO Y COMA.
            Ej.: tags="Col. 1.178 ICA Burgos; Mediador"
  - langs   Opcional. Idiomas, SEPARADOS POR COMAS. Ej.: langs="ES, EN, FR"

Colores de los idiomas
  - ES  → amarillo
  - EN  → rosa / granate
  - FR  → azul
  - Otro código (p. ej. DE) → se muestra en blanco, sin color propio.
    Para darle color, añade en custom.css una regla  .qa-pill--lang-de { ... }
  Da igual escribirlo en mayúsculas o minúsculas.

A tener en cuenta
  No metas las fichas dentro de qa/grid.

Ejemplo

  {{< qa/lawyer name="Pablo Quintana Jabato" role="Abogado · Graduado en Derecho por la Universidad de Navarra" tags="Col. 3.308 ICA Burgos" langs="ES, EN, FR" >}}
  Graduado en Derecho por la Universidad de Navarra donde obtuvo premios y distinciones...
  {{< /qa/lawyer >}}


-------------------------------------------------------------------------------
14. qa/button — BOTÓN
-------------------------------------------------------------------------------

Qué hace
  Botón suelto en forma de píldora. Para varios seguidos, usa qa/actions.

Contenido interior
  No.

Parámetros
  - text    Obligatorio. Texto del botón.
  - link    Obligatorio. Enlace.
  - style   Opcional. Estilo del botón:
              "primary"  negro, granate al pasar el ratón (por defecto)
              "accent"   granate
              "ghost"    transparente con borde
  - icon    Opcional. Icono a la izquierda del texto.

Ejemplos

  {{< qa/button text="Contacto" link="contacto" >}}
  {{< qa/button text="947 27 31 01" link="tel:+34947273101" style="ghost" icon="phone" >}}
  {{< qa/button text="Formulario" link="https://forms.office.com/e/H4qwDRuGdY" style="accent" icon="mail" >}}


-------------------------------------------------------------------------------
15. qa/pill — PÍLDORA O ETIQUETA
-------------------------------------------------------------------------------

Qué hace
  Etiqueta pequeña y redondeada, con o sin enlace.

Contenido interior
  No.

Parámetros
  - text     Obligatorio. Texto.
  - link     Opcional. Si se indica, la píldora es un enlace.
  - icon     Opcional. Icono a la izquierda.
  - accent   Opcional. "true" = fondo rosado y texto granate.
             Por defecto: fondo blanco con borde.

Ejemplos

  {{< qa/pill text="Novedad" >}}
  {{< qa/pill text="Ver servicios" link="servicios" icon="arrow-right" >}}
  {{< qa/pill text="Urgente" accent="true" >}}


-------------------------------------------------------------------------------
16. qa/actions — FILA DE BOTONES
-------------------------------------------------------------------------------

Qué hace
  Agrupa varios qa/button en una fila con la separación correcta (en móvil
  pasan a varias líneas). Si va justo después de qa/steps o qa/grid, deja
  automáticamente un espacio encima.

Contenido interior
  Obligatorio. Uno o varios qa/button.

Parámetros
  Ninguno.

Ejemplo

  {{< qa/actions >}}
    {{< qa/button text="Concierte una cita" link="contacto" >}}
    {{< qa/button text="947 27 31 01" link="tel:+34947273101" style="ghost" icon="phone" >}}
  {{< /qa/actions >}}


-------------------------------------------------------------------------------
17. qa/showcase — IMAGEN DESTACADA A LO ANCHO
-------------------------------------------------------------------------------

Qué hace
  Bloque a lo ancho como el que aparece en la portada de midday.ai al hacer
  scroll: un fondo (por defecto negro con grano y una luz arriba) y, centrada
  encima, la imagen principal (una captura, una foto del despacho...).
  Al entrar en pantalla aparece con un suave efecto (la imagen sube y el
  bloque crece un poco). Deja espacio de sección encima.

Contenido interior
  No.

Parámetros
  - src       Opcional. Imagen principal, centrada. Ruta dentro de static/
              ("/images/despacho.jpg") o dirección web completa.
  - alt       Recomendado si hay src. Descripción de la imagen (accesibilidad y Google).
  - bg        Opcional. Fondo del bloque:
                "dark"    negro con grano y luz superior (por defecto)
                "sand"    gris piedra
                "paper"   blanco con borde fino
                "accent"  granate #a10d2a
                cualquier color CSS:  bg="#1d1d1f"   bg="linear-gradient(#fff, #e6e4e0)"
                una imagen:           bg="/images/fondo.jpg"   (cubre todo el bloque)
  - video     Opcional. Vídeo de fondo .mp4 (bucle, sin sonido). Si "bg" es una
              imagen, se usa como portada mientras carga el vídeo.
  - width     Opcional. Ancho del bloque:
                "page"  el ancho del contenido de la página (por defecto)
                "full"  todo el ancho de la ventana, de borde a borde
  - height    Opcional. Alto fijo (CSS): height="560px". Por defecto el alto
              va en proporción al ancho (16:11), entre 360 y 900 px.
  - size      Opcional. Ancho máximo de la imagen principal, en %. Por defecto 85.
  - fit       Opcional. "contain" (imagen entera con margen, por defecto) o
              "cover" (la imagen principal rellena todo el bloque, como una foto).
  - caption   Opcional. Pie de foto pequeño bajo el bloque. Admite Markdown.
  - animate   Opcional. "false" desactiva el efecto de aparición.

A tener en cuenta
  - El efecto de aparición solo funciona en navegadores modernos (Chrome, Edge,
    Safari reciente). En los demás, la imagen se ve igual pero sin animación.
  - Las personas que tienen activado "reducir movimiento" no ven la animación.
  - Las imágenes se guardan en static/images/ (p. ej. static/images/despacho.jpg
    se escribe src="/images/despacho.jpg").

Ejemplos

  Como en midday.ai (fondo oscuro, imagen centrada):

  {{< qa/showcase src="/images/ejemplos/expediente.svg" alt="Vista de un expediente" >}}

  De borde a borde, fondo piedra y alto fijo:

  {{< qa/showcase src="/images/despacho.jpg" alt="Despacho" bg="sand" width="full" height="560px" size="70" >}}

  Una foto que rellena todo el bloque, con pie:

  {{< qa/showcase src="/images/burgos.jpg" alt="Burgos" fit="cover" caption="Burgos, sede del despacho." >}}


-------------------------------------------------------------------------------
18. qa/split — PANTALLA DIVIDIDA (LISTA + PANEL)
-------------------------------------------------------------------------------

Qué hace
  Divide la pantalla en dos, como la sección "How it works" de midday.ai:

    Cómo trabajamos              ┌──────────────────────────────┐
                                 │                              │
    ■ Primera consulta           │   imagen y/o texto del       │
    │ Estudiamos su caso...      │   elemento activo            │
    ▪ Estudio del asunto         │                              │
    │                            │                              │
    ▪ Defensa                    └──────────────────────────────┘

  - Izquierda: un título y una lista de elementos unidos por una línea vertical
    con puntos cuadrados. El activo se ve en negro con su punto granate y su
    descripción; los demás, en gris.
  - Derecha: un panel con borde fino que muestra la imagen y/o el texto del
    elemento activo.
  - Se cambia de elemento pulsando en él (o con las flechas del teclado) y
    avanza solo cada 8 segundos mientras está en pantalla (se detiene al pasar
    el ratón por encima).
  - En móvil y tableta se apila: cada elemento con su descripción y su panel debajo.

Contenido interior
  Obligatorio. Dos o más qa/split-item (apartado 19). Nada más.

Parámetros
  - title      Opcional. Título en serif sobre la lista. Admite Markdown.
  - eyebrow    Opcional. Antetítulo pequeño en mayúsculas granate.
  - interval   Opcional. Segundos entre cambios automáticos. Por defecto 8.
               "0" desactiva el avance automático.
  - height     Opcional. Alto del bloque en escritorio (CSS). Por defecto 560px.
  - side       Opcional. "right" (panel a la derecha, por defecto) o "left".

A tener en cuenta
  - Necesita JavaScript para cambiar de elemento (assets/js/qa.js, ya incluido
    en todas las páginas). Sin JavaScript se ve el primer elemento.
  - Quien tiene activado "reducir movimiento" no ve el avance automático.
  - Se puede usar varias veces en la misma página.

Ejemplo

  {{< qa/split eyebrow="Método" title="Cómo trabajamos" >}}
    {{< qa/split-item title="Primera consulta" text="Estudiamos su caso con usted." image="/images/ejemplos/paso-consulta.svg" alt="Agenda" />}}
    {{< qa/split-item title="Estudio del asunto" text="Analizamos la documentación." image="/images/ejemplos/paso-estudio.svg" alt="Documentos" />}}
    {{< qa/split-item title="Defensa" text="Le defendemos en todas las fases." image="/images/ejemplos/paso-defensa.svg" alt="Balanza" />}}
  {{< /qa/split >}}


-------------------------------------------------------------------------------
19. qa/split-item — CADA ELEMENTO DE qa/split
-------------------------------------------------------------------------------

Qué hace
  Un elemento de la lista de qa/split. Su título y descripción van a la
  izquierda; su imagen y su texto, al panel de la derecha.

Contenido interior
  Opcional. Texto del PANEL DERECHO (admite Markdown: párrafos, listas,
  subtítulos, enlaces). Si hay imagen, el texto va debajo de ella.
  Si no pones contenido interior, ciérralo con />}}

Parámetros
  - title   Obligatorio. Título en la lista de la izquierda. Admite Markdown.
  - text    Opcional. Descripción corta bajo el título (solo se ve en el activo).
            Admite Markdown.
  - image   Opcional. Imagen del panel derecho.
  - alt     Recomendado si hay imagen. Descripción de la imagen.
  - fit     Opcional. "contain" (imagen entera con margen, por defecto) o
            "cover" (la imagen rellena todo el panel).

A tener en cuenta
  - Siempre dentro de qa/split. Fuera de él da error al compilar.
  - Panel solo con imagen, solo con texto, o con las dos cosas.

Ejemplos

  Solo imagen:

  {{< qa/split-item title="Defensa" text="Le defendemos en todas las fases." image="/images/defensa.jpg" alt="Sala de vistas" />}}

  Solo texto en el panel:

  {{< qa/split-item title="Honorarios" text="Transparencia desde el principio." >}}
  ### Presupuesto por escrito

  Antes de empezar le entregamos un presupuesto detallado.

  * Sin costes ocultos.
  * Pago fraccionado si lo necesita.
  {{< /qa/split-item >}}


-------------------------------------------------------------------------------
20. NOTICIAS: CÓMO PUBLICAR UNA NOTICIA
-------------------------------------------------------------------------------

Cómo está montado
  - Carpeta:     content/noticias/
  - Portada de la sección:  content/noticias/_index.md  (+ _index.en.md y _index.fr.md)
  - Esa portada declara  cascade: type: blog  → TODA página dentro de la carpeta
    es automáticamente una noticia (usa el sistema de blog de Hextra).
  - Aparece en el menú entre "Servicios" y "Contacto" (hugo.yaml → menu.main).
  - Listado: de más reciente a más antigua, 10 por página con paginación
    (hugo.yaml → params.blog.list).
  - Cada noticia muestra al final enlaces a la anterior y la siguiente.

Crear una noticia nueva
  1. Crea un archivo en content/noticias/ con un nombre corto en minúsculas y
     guiones; ese nombre será la dirección web:
       content/noticias/nueva-ley-de-eficiencia.md  →  /noticias/nueva-ley-de-eficiencia/
  2. Copia esta cabecera y rellénala:

       ---
       title: Título de la noticia
       date: 2026-10-07
       description: Resumen de una o dos frases. Sale en el listado y en Google.
       tags: [Penal, Novedades legislativas]
       authors: [Pablo Quintana Jabato]
       draft: false
       ---
       Primer párrafo de la noticia...

       ## Un subtítulo

       Más texto...

  3. Para la versión en inglés o francés, crea al lado el mismo nombre con
     .en.md o .fr.md (p. ej. nueva-ley-de-eficiencia.en.md).
     Si no la creas, la noticia solo aparece en español.

Campos de la cabecera
  - title         Obligatorio. Título.
  - date          Obligatorio. Fecha AAAA-MM-DD. Ordena el listado. Se muestra como
                  "7 de octubre de 2026" (o en el idioma de la página).
  - description   Recomendado. Resumen para el listado y los buscadores.
  - tags          Opcional. Etiquetas entre corchetes, separadas por comas.
  - authors       Opcional. Autor o autores entre corchetes, separados por comas.
  - draft         Opcional. "true" = borrador, no se publica.
  - toc           Opcional. "true" muestra el índice lateral con los subtítulos (##).
                  Por defecto está desactivado en Noticias.
  - contactCard   Opcional. "false" quita la tarjeta de contacto que se añade
                  automáticamente al final de cada noticia.

Las noticias de prueba
  "Lorem ipsum dolor sit amet" y "Sed ut perspiciatis unde omnis" (en ES, EN y FR).
  Para quitarlas, borra los 6 archivos lorem-ipsum-dolor-sit-amet.* y
  sed-ut-perspiciatis.* de content/noticias/.

Dentro del texto de una noticia se pueden usar todos los shortcodes de esta guía.


-------------------------------------------------------------------------------
21. MENÚ DE NAVEGACIÓN Y MENÚS ANIDADOS
-------------------------------------------------------------------------------

Cómo se ve
  - La barra ocupa todo el ancho: logotipo a la izquierda, enlaces y teléfono a
    la derecha (con 24 px de margen a cada lado), como en midday.ai.
  - Enlaces en gris, sin fondos ni bordes. El de la sección en la que se está
    aparece en negrita y en negro (también en sus subpáginas: dentro de
    /servicios/penal/ se marca "Servicios").

Dónde se configura
  hugo.yaml → menu.main. Cada elemento lleva:
    identifier   nombre interno (también sirve para traducirlo en i18n/*.yaml)
    name         texto que se ve
    pageRef      página del sitio ("/noticias")  ·  o url para enlaces externos
    weight       orden (de menor a mayor)

Menús anidados (desplegables)
  Un elemento con "hijos" deja de ser un enlace y, al pasar el ratón o pulsar,
  abre un panel a todo el ancho bajo la barra (como el menú "Features" de
  midday.ai) con el título y la descripción de cada hijo. Se cierra al salir con
  el ratón, al pulsar fuera o con la tecla Esc.

  Para crear uno:
    1. Añade el elemento padre, sin pageRef.
    2. Añade cada hijo con "parent:" igual al identifier del padre.

  Parámetros opcionales (dentro de params:)
    - Padre:  description   Texto en serif a la izquierda del panel.
    - Hijo:   description   Línea gris bajo el título del enlace.
    - Hijo:   menuIcon      Icono en un cuadradito junto al enlace (apartado 23).
                            (Se llama menuIcon y no icon a propósito: con "icon"
                            Hextra oculta el enlace en el menú del móvil.)

  Ejemplo (hay uno igual, comentado, en hugo.yaml listo para activar):

    menu:
      main:
        - identifier: recursos
          name: Recursos
          weight: 4
          params:
            description: Guías y documentos útiles.
        - identifier: guias
          name: Guías
          parent: recursos
          pageRef: /guias
          weight: 1
          params:
            description: Explicaciones prácticas paso a paso
            menuIcon: book-open

  En el móvil
    El menú hamburguesa (de Hextra) muestra el padre como un grupo con sus hijos.
    Ojo: no muestra los hijos cuya página tenga "sidebar: exclude: true" (por
    ejemplo, las páginas de cada área de Servicios lo tienen).

  Traducción
    Si el identifier aparece en i18n/es.yaml, en.yaml o fr.yaml, se usa ese texto
    según el idioma (así salen "News" y "Actualités" para "noticias").


-------------------------------------------------------------------------------
22. DATOS DE CONTACTO COMPARTIDOS (hugo.yaml)
-------------------------------------------------------------------------------

La barra de navegación (botón del teléfono), el pie de página y qa/cta leen
estos datos. Si cambian aquí, cambian en todo el sitio:

  params:
    contact:
      phone:     "947 27 31 01"           ← formato nacional
      phoneIntl: "(+34) 947 27 31 01"     ← formato internacional (qa/cta con intl="true")
      phoneLink: "+34947273101"           ← número para tel:, sin espacios
      address:   "c/ Santander 11, 2º C, 09004 Burgos"   ← pie de página
      maps:      "https://maps.app.goo.gl/tUnp3YdsnFdcqDZM7"
      form:      "https://forms.office.com/e/H4qwDRuGdY"

  ¡OJO! Lo escrito a mano en las páginas (el teléfono de qa/hero, las tarjetas
  de Contacto...) NO se actualiza solo: hay que cambiarlo también allí.

Los textos del pie (horario, títulos de columnas, créditos) y el texto de
"no hay noticias" están en i18n/es.yaml, i18n/en.yaml e i18n/fr.yaml.


-------------------------------------------------------------------------------
23. ICONOS DISPONIBLES
-------------------------------------------------------------------------------

Para los parámetros icon y secondaryIcon. Son los iconos del tema Hextra.
Los más útiles:

  phone              teléfono            mail                correo
  location-marker    ubicación           map                 mapa
  scale              balanza             home                casa
  document-text      documento           briefcase           maletín
  library            edificio público    office-building     oficina
  users              usuarios            user                usuario
  shield-check       escudo              calendar            calendario
  clock              reloj               translate           idiomas
  arrow-right        flecha              arrow-circle-right  flecha en círculo
  information-circle información         academic-cap        diploma

  Si escribes un nombre que no existe, la web NO compila y da el error:
    icon "..." not found


-------------------------------------------------------------------------------
24. SHORTCODES DE HEXTRA QUE SIGUEN FUNCIONANDO
-------------------------------------------------------------------------------

Los del tema original siguen funcionando, con el nuevo aspecto:

  {{< hextra/hero-subtitle >}}...{{< /hextra/hero-subtitle >}}
      Entradilla grande gris bajo el título de la página.

  {{< callout type="error" icon="phone" >}}...{{< /callout >}}
      Franja blanca con icono granate (los "Contacte con nosotros").

  {{% details title="..." closed="true" %}}...{{% /details %}}
      Desplegable con borde fino. ESTE SÍ se escribe con %.

  {{< badge content="..." >}}
      Píldora neutra (el parámetro color ya no cambia el color).

  {{% steps %}}...{{% /steps %}}
      Pasos del tema (con %). Para listas nuevas, mejor qa/steps.

  {{< cards >}} {{< card ... >}} {{< /cards >}}
      Tarjetas del tema, con icono granate.

  {{< hextra/hero-button text="..." link="..." >}}
      Botón negro en píldora.

  {{< icon "nombre" >}}
      Icono suelto dentro del texto.


-------------------------------------------------------------------------------
25. ERRORES FRECUENTES
-------------------------------------------------------------------------------

  Problema:  Sale texto raro como <a class="..."> en la página.
  Causa:     Shortcode sin cerrar, o escrito con {{% en vez de {{<.
  Solución:  Cada {{< qa/x >}} con contenido necesita su {{< /qa/x >}}.

  Problema:  Error al compilar: "must be closed or self-closed".
  Causa:     Shortcode que admite contenido, abierto y sin cerrar.
  Solución:  Añadir {{< /qa/x >}} o cerrarlo con />}}

  Problema:  Error al compilar: icon "..." not found.
  Causa:     Nombre de icono inexistente.
  Solución:  Ver apartado 23.

  Problema:  Un enlace da 404 en inglés o francés.
  Causa:     La página enlazada solo existe en español.
  Solución:  Quitar el link en EN/FR o crear la página traducida.

  Problema:  La cursiva del titular no sale en granate.
  Causa:     Se usó _guiones bajos_ o hay espacios junto a los asteriscos.
  Solución:  Escribir *texto* sin espacios por dentro.

  Problema:  El texto de una tarjeta con color propio no se lee.
  Causa:     Falta el parámetro text.
  Solución:  Fondo claro → text="dark"   ·   fondo oscuro → text="light"

  Problema:  Una noticia no aparece en el listado.
  Causa:     draft: true, fecha futura, o el archivo no está en content/noticias/.
  Solución:  Revisar la cabecera. Las fechas futuras no se publican hasta ese día.

  Problema:  Tras editar una plantilla, el servidor local sigue mostrando lo antiguo.
  Causa:     Fallo del vigilante de archivos de "hugo server" en Windows.
  Solución:  Parar y volver a lanzar "hugo server". No afecta a la web publicada.


-------------------------------------------------------------------------------
26. PLANTILLA PARA UNA PÁGINA NUEVA
-------------------------------------------------------------------------------

  ---
  title: Título de la página
  description: Descripción para buscadores.
  toc: false
  ---
  {{< hextra/hero-subtitle >}}
  Entradilla de la página.
  {{< /hextra/hero-subtitle >}}

  {{< qa/section eyebrow="Sección" title="Título de la sección" >}}
  Texto introductorio opcional.
  {{< /qa/section >}}

  {{< qa/steps numbered="false" >}}
    {{< qa/step title="Elemento uno" link="contacto" more="Más información" >}}
    Texto del elemento.
    {{< /qa/step >}}
    {{< qa/step title="Elemento dos" >}}
    Texto del elemento.
    {{< /qa/step >}}
  {{< /qa/steps >}}

  {{< qa/grid cols="3" >}}
    {{< qa/card icon="scale" title="Tarjeta blanca" >}}Texto.{{< /qa/card >}}
    {{< qa/card icon="home" title="Tarjeta piedra" bg="sand" >}}Texto.{{< /qa/card >}}
    {{< qa/card icon="phone" title="Tarjeta granate" bg="accent" link="contacto" more="Contactar" />}}
  {{< /qa/grid >}}

  {{< qa/cta title="Concierte una cita con nosotros" button="Contacto" />}}


-------------------------------------------------------------------------------
PÁGINA DE EJEMPLOS
-------------------------------------------------------------------------------

  content/ejemplos/_index.md muestra qa/showcase y qa/split funcionando con
  ilustraciones de muestra (static/images/ejemplos/). Es un BORRADOR: no se
  publica. Para verla en local:

    hugo server -D        →  http://localhost:1313/ejemplos/
