import React from "react";

function TopicsPage(){
    return(
        <>
    <section className="mainSection">
      <h2>Web Dev Concepts</h2>
      <nav className="local">
        <a href="#webServers">Servers</a>
        <a href="#frontendDesign">Design</a>
        <a href="#optimizedImages">Images</a>
        <a href="#favicons">Favicons</a>
      </nav>

      <article id="webServers">
        <h3>Web Servers</h3>
        <p>
          An <strong> index</strong> is the location or link of a resource. By
          default, a server will look to provide a starting file, by default
          it is typically named index followed by the corresponding filename
          extension depending on the language. The designated homepage of a
          web server is most often configured to path to
          <code> index.html</code> when receiving a
          <strong> /</strong> request. Nearly all web applications return this
          file as a homepage from their root directory. The web app will
          return this file when receiving a <code> GET</code> request for
          <strong> /</strong>. An example of this include the Apache web
          server(OSU Engineering's web server) which utilizes index.html as
          its default name.
        </p>
        <p>
          While viewing <code> index.html</code> from the web server, it can
          be observed that the request method <code> GET</code> is being
          called with a status code of <samp> 200 OK</samp> indicating that
          the request was successful. From the URL
          https://web.engr.oregonstate.edu/~reyeschr/CS290/Module1/a1-reyeschr/
          the scheme and protocol <strong>HTTPS</strong> is being used,
          subdomains are also being called, and the file path for index.html
          proceeds the hostname of oregonstate.edu. The response headers
          include the document type which is text/html, the server being used
          which is <strong>Apache</strong>, and the date of when the file was
          last modified. Now, in contrast to viewing these values through the
          web server, when viewing the file locally the URL changes. The
          request headers indicate a request method of <code> GET</code> with
          a status code of<samp> 200 OK</samp>, indicating the request was
          successful. From the URL
          file:///c%3A/CS290_OSU/Module1/a1-reyeschr/index.html the scheme is
          <strong> file</strong>, which is used to read files from the
          corresponding drive on the local machine. The response headers
          include key value pairs of the last-modified date and content-type.
        </p>
        <p>
          Using Chrome's inspect tool and network tab, the file
          <code> favicon.ico</code> returns a status of <code> 200 OK</code>.
          The file was not included in the <code> public_html</code> folder
          but must have been an OSU server side addition in the root directory
          according to the request URL
          https://web.engr.oregonstate.edu/favicon.ico. Two other files
          <code>main.cc</code> and <code>main.js</code> both return a status
          code of <code> 404 Not Found</code> indicating that the requested
          resources were not found on the server.
        </p>
        <p>
          The URL begins with the scheme, which is HTTPS, this is the protocol
          that will be used when the client and server communicate. Following,
          the subdomains web.engr which are separated by a period and precede
          the host domain of oregonstate.edu. The host domain name is then
          mapped to the server. Lastly, the path to the resource, which is a
          static file, is mapped hierarchically to its location on the server.
        </p>
      </article>

      <article id="frontendDesign">
        <h3>Frontend Design</h3>

        <p>
          The concept of <strong>frontend design</strong> is a fundamental
          principle behind web development. It is the process of designing and
          creating a rich graphical user-interface (GUI) with attractive
          colors, fonts, media, and icons to represent the product or company.
          In addition, for <strong>usability</strong> a methodical approach is
          engineered to create web apps or any other product, guaranteeing
          that they can adhere to the <strong>Five "Es"</strong> while
          successfully addressing user objectives. These methods for a
          product, system, or service are…
        </p>
        <dl>
          <dt>Effective</dt>
          <dd>
            Provides accuracy and simplicity with which users can use to
            complete their objective(s).
          </dd>

          <dt>Efficient</dt>
          <dd>
            Ensures users tasks are easier and faster to perform. Tasks should
            be achieved with minimal effort and time.
          </dd>

          <dt>Easy to navigate</dt>
          <dd>
            Intuitive and little to no guidance needed to locate their
            objective.
          </dd>

          <dt>Error-free</dt>
          <dd>
            Thoroughly tested to ensure users do not encounter faults and
            necessary to avoid issues with accessibility and availability.
          </dd>

          <dt>Enjoyable/engaging</dt>
          <dd>
            Must ensure a pleasing user experience that caters to both their
            essential needs and their engagement.
          </dd>
        </dl>
        <p>
          HTML <strong>page layout tags</strong> are for structuring a web
          page and content organization. The <strong>&lt;header&gt;</strong>;
          element defines the top section, typically housing logos, headings,
          and primary navigation. <strong>&lt;nav&gt;</strong> creates
          navigation links for easy access to different site sections.
           <strong>&lt;main&gt;</strong> wraps the central content.
          <strong>&lt;section&gt;</strong> divides content into meaningful
          segments, improving document structure.
          <strong>&lt;article&gt;</strong> is reserved for self-contained
          content like blog posts. <strong>&lt;aside&gt;</strong> handles
          related content, typically presented as sidebars. The
          <strong>&lt;figure&gt;</strong> element hosts images and media,
          while <strong>&lt;blockquote&gt;</strong> marks extended quotations.
          <strong>&lt;footer&gt;</strong> forms the bottom section for
          copyright, contact details, and extra links. The versatile
          <strong>&lt;div&gt;</strong> element aids in overall content
          organization.
        </p>

        <p>About <strong>anchors</strong>:</p>
        <ol>
          <li>
            External link anchors are used by specifying typically the
            absolute URL of the external webpage as the destination. Users can
            click on the link to navigate to the external site.
          </li>
          <li>
            To link to internal content within the same page, an anchor with a
            corresponding ID attribute on the target element.
          </li>
          <li>
            To achieve page-to-page links, anchors can be used to navigate
            between different pages on a website. This is done by specifying
            the relative URL of the target page as the destination.
          </li>
        </ol>
      </article>

      <article id="optimizedImages">
        <h3>Optimizing images</h3>
        <p>
          Images are optimized for web use through six major specifications.
          The first is a descriptive file name, as it helps improve search
          engine optimization. In order to load the image as quickly as
          possible for the user, the image file size should be as small as
          possible. To fit the image correctly based on the viewing port, it
          should be cropped to precise dimensions. The nature of the image
          should be in the format that best suits it, for example line-art
          should be in the GIF format because of its transparency and
          anti-alias edges. Since there is a myriad of resolution specs, it is
          best practice to serve accordingly with multiple image sizes. The
          correct color mode should be used for file size, and compatibility.
          Lastly, you should use use GIF for simple animations, PNG for images
          with transparency, SVG for scalable vector graphics, JPG for
          photographs, and WebP for web-optimized images.
        </p>
      </article>

      <article id="favicons">
        <h3>Favicons</h3>
        <p>
          A favorite icon or touch icon is helpful for a user to identify and
          distinguish between tabs in the browser. On devices, websites can be
          bookmarked to the home screen and a favicon will populate the
          shortcut. Favicons usually come in ICO or PNG file formats.
        </p>
      </article>
    </section>
  </>
    );
}

export default TopicsPage;