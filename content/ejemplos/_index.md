---
title: Ejemplos de shortcodes
description: Página de pruebas con los shortcodes qa/showcase y qa/split.
toc: false
# Borrador: no se publica. Para verla en local:  hugo server -D
draft: true
sidebar:
  exclude: true
---
{{< hextra/hero-subtitle >}}
Página de pruebas (borrador). Las imágenes son ilustraciones de muestra en `static/images/ejemplos/`.
{{< /hextra/hero-subtitle >}}

{{< qa/section eyebrow="qa/showcase" title="Imagen destacada a lo ancho" >}}
Fondo oscuro con grano (por defecto) y la imagen principal centrada encima, como en la portada de midday.ai.
{{< /qa/section >}}

{{< qa/showcase src="/images/ejemplos/expediente.svg" alt="Vista de un expediente" caption="Ilustración de muestra." >}}

{{< qa/section eyebrow="qa/showcase" title="A todo el ancho de la ventana, fondo piedra" />}}

{{< qa/showcase src="/images/ejemplos/expediente.svg" alt="Vista de un expediente" bg="sand" width="full" height="560px" size="70" >}}

{{< qa/split eyebrow="qa/split" title="Cómo trabajamos" >}}
  {{< qa/split-item title="Primera consulta" text="Estudiamos su caso con usted en el despacho y le explicamos sus opciones." image="/images/ejemplos/paso-consulta.svg" alt="Agenda con una cita" />}}
  {{< qa/split-item title="Estudio del asunto" text="Analizamos la documentación y preparamos la estrategia." image="/images/ejemplos/paso-estudio.svg" alt="Documentos en estudio" />}}
  {{< qa/split-item title="Defensa" text="Le asistimos y defendemos en todas las fases del procedimiento." image="/images/ejemplos/paso-defensa.svg" alt="Balanza de la justicia" />}}
  {{< qa/split-item title="Solo texto en el panel" text="El panel derecho también puede mostrar texto en lugar de una imagen." >}}
### Texto en el panel

El contenido interior de `qa/split-item` aparece en el panel derecho. Admite **Markdown**: párrafos, listas y enlaces a [contacto](/contacto).

* Primer punto.
* Segundo punto.
  {{< /qa/split-item >}}
{{< /qa/split >}}

{{< qa/split title="Panel a la izquierda y sin avance automático" side="left" interval="0" height="480px" >}}
  {{< qa/split-item title="Primera consulta" text="Estudiamos su caso con usted." image="/images/ejemplos/paso-consulta.svg" alt="Agenda" />}}
  {{< qa/split-item title="Defensa" text="Le defendemos en todas las fases." image="/images/ejemplos/paso-defensa.svg" alt="Balanza" />}}
{{< /qa/split >}}

---

{{< qa/split eyebrow="Áreas de práctica" title="Diversas áreas del *Derecho*" interval="10" border="false" bg="#f4efe6" >}}
  {{< qa/split-item title="Penal" text="Defensa, asistencia e intervención en todo tipo de procedimientos penales." >}}
### Derecho Penal

Defensa, asistencia e intervención en todo tipo de procedimientos penales y frente a todo tipo de delitos.

* Asistencia al detenido.
* Acusación particular.
* Juicios rápidos y delitos leves.

[Más información →](/servicios/penal)
  {{< /qa/split-item >}}
  {{< qa/split-item title="Familia" text="Divorcios, medidas sobre hijos menores, pensión de alimentos, etc." >}}
### Derecho de Familia

Asesoramiento y defensa en asuntos de familia: divorcios, adopción de medidas sobre hijos menores, pensión de alimentos, etc.

* Divorcios y separaciones.
* Medidas sobre hijos menores.
* Pensión de alimentos.

[Más información →](/servicios/familia)
  {{< /qa/split-item >}}
  {{< qa/split-item title="Civil" bg="accent" text="Sucesiones, arrendamientos, desahucios, reclamaciones de cantidad, etc." >}}
### Derecho Civil

Asesoramiento y defensa en otros asuntos civiles: sucesiones, arrendamientos, desahucios, reclamaciones de cantidad, etc.

* Sucesiones.
* Arrendamientos y desahucios.
* Reclamaciones de cantidad.

[Más información →](/servicios/civil)
  {{< /qa/split-item >}}
  {{< qa/split-item title="Laboral" bg="dark" text="Despidos, reclamaciones de cantidad, incapacidad permanente, etc." >}}
### Derecho Laboral

Asesoramiento y defensa en cuestiones laborales individuales y frente a la Seguridad Social: despidos, reclamaciones de cantidad, procedimientos de incapacidad permanente, etc.

* Despidos.
* Reclamaciones de cantidad.
* Incapacidad permanente.

[Más información →](/servicios/laboral)
  {{< /qa/split-item >}}
  {{< qa/split-item title="Administrativo" text="Ante la Administración y en vía contencioso-administrativa." >}}
### Derecho Administrativo

Asesoramiento y defensa ante la Administración y en vía judicial en el orden Contencioso-Administrativo.

* Procedimientos ante la Administración.
* Recursos administrativos.
* Contencioso-administrativo.

[Más información →](/servicios/administrativo)
  {{< /qa/split-item >}}
{{< /qa/split >}}
