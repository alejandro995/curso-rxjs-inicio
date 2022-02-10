import { fromEvent, map, tap } from "rxjs";

const texto = document.createElement('div');
texto.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius nisi a augue laoreet lacinia. Aliquam rutrum dui eget orci ultricies, malesuada vulputate quam tempus. Proin placerat purus nunc, ac placerat mauris sollicitudin non. Sed et erat varius, faucibus elit vel, semper orci. Aliquam lacinia ante eget quam pretium, vel fermentum ex faucibus. Mauris ac diam sit amet diam pharetra lobortis lacinia sit amet eros. Morbi ut euismod enim, sit amet volutpat elit. Duis at auctor ipsum, feugiat feugiat turpis. Praesent sollicitudin volutpat scelerisque.
<br/><br/>
In id ante neque. Aliquam eget tortor risus. Etiam non odio vehicula, luctus enim nec, vestibulum nulla. Phasellus rutrum dolor a lectus commodo laoreet. Curabitur vel porta tortor. Vivamus nulla odio, consequat in orci a, congue elementum nulla. Etiam malesuada tempor felis, efficitur porttitor quam mollis id. Nulla nisi neque, consequat vitae nisl sit amet, porttitor tincidunt massa.
<br/><br/>
In hac habitasse platea dictumst. Quisque blandit, tortor ut porttitor facilisis, ipsum libero sodales dui, sit amet suscipit mi ante sed nibh. Vestibulum sit amet ullamcorper orci. Aliquam vel massa in justo cursus pulvinar. In convallis blandit accumsan. Donec ut fermentum justo. Cras eget tincidunt dui, et feugiat lorem. Cras ac aliquet mi, a venenatis dui. Vivamus in tempor dui. Vivamus lacinia blandit scelerisque.
<br/><br/>
Nulla facilisi. Nam placerat lorem neque, quis bibendum metus eleifend id. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam id felis ac sem iaculis vehicula vitae ac quam. Vivamus congue quam ac felis ultrices hendrerit. Proin sed dui efficitur, sodales lorem ut, consequat velit. Mauris eu aliquet neque. Nulla ullamcorper sed sapien id mollis. Cras tempus quis diam quis tempus. Suspendisse pellentesque dui quis sapien faucibus finibus.
<br/><br/>
Suspendisse quis quam lorem. Morbi sodales, orci ut bibendum ultricies, mauris odio facilisis leo, ut egestas eros nibh non ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin id elementum neque. Nam feugiat placerat leo ut blandit. In lacinia sem nibh, sed porttitor neque iaculis quis. Fusce et eleifend lacus. Quisque pharetra eget diam nec facilisis. Nullam porta elementum nibh, id pharetra lacus accumsan non. Pellentesque malesuada, erat in pellentesque hendrerit, mi ex facilisis dui, eu malesuada velit arcu vitae nunc. Mauris sapien odio, rutrum at varius a, ullamcorper at velit. Quisque malesuada sagittis libero. Etiam at quam a orci fringilla dictum vitae a urna.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius nisi a augue laoreet lacinia. Aliquam rutrum dui eget orci ultricies, malesuada vulputate quam tempus. Proin placerat purus nunc, ac placerat mauris sollicitudin non. Sed et erat varius, faucibus elit vel, semper orci. Aliquam lacinia ante eget quam pretium, vel fermentum ex faucibus. Mauris ac diam sit amet diam pharetra lobortis lacinia sit amet eros. Morbi ut euismod enim, sit amet volutpat elit. Duis at auctor ipsum, feugiat feugiat turpis. Praesent sollicitudin volutpat scelerisque.
<br/><br/>
In id ante neque. Aliquam eget tortor risus. Etiam non odio vehicula, luctus enim nec, vestibulum nulla. Phasellus rutrum dolor a lectus commodo laoreet. Curabitur vel porta tortor. Vivamus nulla odio, consequat in orci a, congue elementum nulla. Etiam malesuada tempor felis, efficitur porttitor quam mollis id. Nulla nisi neque, consequat vitae nisl sit amet, porttitor tincidunt massa.
<br/><br/>
In hac habitasse platea dictumst. Quisque blandit, tortor ut porttitor facilisis, ipsum libero sodales dui, sit amet suscipit mi ante sed nibh. Vestibulum sit amet ullamcorper orci. Aliquam vel massa in justo cursus pulvinar. In convallis blandit accumsan. Donec ut fermentum justo. Cras eget tincidunt dui, et feugiat lorem. Cras ac aliquet mi, a venenatis dui. Vivamus in tempor dui. Vivamus lacinia blandit scelerisque.
<br/><br/>
Nulla facilisi. Nam placerat lorem neque, quis bibendum metus eleifend id. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam id felis ac sem iaculis vehicula vitae ac quam. Vivamus congue quam ac felis ultrices hendrerit. Proin sed dui efficitur, sodales lorem ut, consequat velit. Mauris eu aliquet neque. Nulla ullamcorper sed sapien id mollis. Cras tempus quis diam quis tempus. Suspendisse pellentesque dui quis sapien faucibus finibus.
<br/><br/>
Suspendisse quis quam lorem. Morbi sodales, orci ut bibendum ultricies, mauris odio facilisis leo, ut egestas eros nibh non ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin id elementum neque. Nam feugiat placerat leo ut blandit. In lacinia sem nibh, sed porttitor neque iaculis quis. Fusce et eleifend lacus. Quisque pharetra eget diam nec facilisis. Nullam porta elementum nibh, id pharetra lacus accumsan non. Pellentesque malesuada, erat in pellentesque hendrerit, mi ex facilisis dui, eu malesuada velit arcu vitae nunc. Mauris sapien odio, rutrum at varius a, ullamcorper at velit. Quisque malesuada sagittis libero. Etiam at quam a orci fringilla dictum vitae a urna.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius nisi a augue laoreet lacinia. Aliquam rutrum dui eget orci ultricies, malesuada vulputate quam tempus. Proin placerat purus nunc, ac placerat mauris sollicitudin non. Sed et erat varius, faucibus elit vel, semper orci. Aliquam lacinia ante eget quam pretium, vel fermentum ex faucibus. Mauris ac diam sit amet diam pharetra lobortis lacinia sit amet eros. Morbi ut euismod enim, sit amet volutpat elit. Duis at auctor ipsum, feugiat feugiat turpis. Praesent sollicitudin volutpat scelerisque.
<br/><br/>
In id ante neque. Aliquam eget tortor risus. Etiam non odio vehicula, luctus enim nec, vestibulum nulla. Phasellus rutrum dolor a lectus commodo laoreet. Curabitur vel porta tortor. Vivamus nulla odio, consequat in orci a, congue elementum nulla. Etiam malesuada tempor felis, efficitur porttitor quam mollis id. Nulla nisi neque, consequat vitae nisl sit amet, porttitor tincidunt massa.
<br/><br/>
In hac habitasse platea dictumst. Quisque blandit, tortor ut porttitor facilisis, ipsum libero sodales dui, sit amet suscipit mi ante sed nibh. Vestibulum sit amet ullamcorper orci. Aliquam vel massa in justo cursus pulvinar. In convallis blandit accumsan. Donec ut fermentum justo. Cras eget tincidunt dui, et feugiat lorem. Cras ac aliquet mi, a venenatis dui. Vivamus in tempor dui. Vivamus lacinia blandit scelerisque.
<br/><br/>
Nulla facilisi. Nam placerat lorem neque, quis bibendum metus eleifend id. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam id felis ac sem iaculis vehicula vitae ac quam. Vivamus congue quam ac felis ultrices hendrerit. Proin sed dui efficitur, sodales lorem ut, consequat velit. Mauris eu aliquet neque. Nulla ullamcorper sed sapien id mollis. Cras tempus quis diam quis tempus. Suspendisse pellentesque dui quis sapien faucibus finibus.
<br/><br/>
Suspendisse quis quam lorem. Morbi sodales, orci ut bibendum ultricies, mauris odio facilisis leo, ut egestas eros nibh non ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin id elementum neque. Nam feugiat placerat leo ut blandit. In lacinia sem nibh, sed porttitor neque iaculis quis. Fusce et eleifend lacus. Quisque pharetra eget diam nec facilisis. Nullam porta elementum nibh, id pharetra lacus accumsan non. Pellentesque malesuada, erat in pellentesque hendrerit, mi ex facilisis dui, eu malesuada velit arcu vitae nunc. Mauris sapien odio, rutrum at varius a, ullamcorper at velit. Quisque malesuada sagittis libero. Etiam at quam a orci fringilla dictum vitae a urna.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius nisi a augue laoreet lacinia. Aliquam rutrum dui eget orci ultricies, malesuada vulputate quam tempus. Proin placerat purus nunc, ac placerat mauris sollicitudin non. Sed et erat varius, faucibus elit vel, semper orci. Aliquam lacinia ante eget quam pretium, vel fermentum ex faucibus. Mauris ac diam sit amet diam pharetra lobortis lacinia sit amet eros. Morbi ut euismod enim, sit amet volutpat elit. Duis at auctor ipsum, feugiat feugiat turpis. Praesent sollicitudin volutpat scelerisque.
<br/><br/>
In id ante neque. Aliquam eget tortor risus. Etiam non odio vehicula, luctus enim nec, vestibulum nulla. Phasellus rutrum dolor a lectus commodo laoreet. Curabitur vel porta tortor. Vivamus nulla odio, consequat in orci a, congue elementum nulla. Etiam malesuada tempor felis, efficitur porttitor quam mollis id. Nulla nisi neque, consequat vitae nisl sit amet, porttitor tincidunt massa.
<br/><br/>
In hac habitasse platea dictumst. Quisque blandit, tortor ut porttitor facilisis, ipsum libero sodales dui, sit amet suscipit mi ante sed nibh. Vestibulum sit amet ullamcorper orci. Aliquam vel massa in justo cursus pulvinar. In convallis blandit accumsan. Donec ut fermentum justo. Cras eget tincidunt dui, et feugiat lorem. Cras ac aliquet mi, a venenatis dui. Vivamus in tempor dui. Vivamus lacinia blandit scelerisque.
<br/><br/>
Nulla facilisi. Nam placerat lorem neque, quis bibendum metus eleifend id. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam id felis ac sem iaculis vehicula vitae ac quam. Vivamus congue quam ac felis ultrices hendrerit. Proin sed dui efficitur, sodales lorem ut, consequat velit. Mauris eu aliquet neque. Nulla ullamcorper sed sapien id mollis. Cras tempus quis diam quis tempus. Suspendisse pellentesque dui quis sapien faucibus finibus.
<br/><br/>
Suspendisse quis quam lorem. Morbi sodales, orci ut bibendum ultricies, mauris odio facilisis leo, ut egestas eros nibh non ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin id elementum neque. Nam feugiat placerat leo ut blandit. In lacinia sem nibh, sed porttitor neque iaculis quis. Fusce et eleifend lacus. Quisque pharetra eget diam nec facilisis. Nullam porta elementum nibh, id pharetra lacus accumsan non. Pellentesque malesuada, erat in pellentesque hendrerit, mi ex facilisis dui, eu malesuada velit arcu vitae nunc. Mauris sapien odio, rutrum at varius a, ullamcorper at velit. Quisque malesuada sagittis libero. Etiam at quam a orci fringilla dictum vitae a urna.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius nisi a augue laoreet lacinia. Aliquam rutrum dui eget orci ultricies, malesuada vulputate quam tempus. Proin placerat purus nunc, ac placerat mauris sollicitudin non. Sed et erat varius, faucibus elit vel, semper orci. Aliquam lacinia ante eget quam pretium, vel fermentum ex faucibus. Mauris ac diam sit amet diam pharetra lobortis lacinia sit amet eros. Morbi ut euismod enim, sit amet volutpat elit. Duis at auctor ipsum, feugiat feugiat turpis. Praesent sollicitudin volutpat scelerisque.
<br/><br/>
In id ante neque. Aliquam eget tortor risus. Etiam non odio vehicula, luctus enim nec, vestibulum nulla. Phasellus rutrum dolor a lectus commodo laoreet. Curabitur vel porta tortor. Vivamus nulla odio, consequat in orci a, congue elementum nulla. Etiam malesuada tempor felis, efficitur porttitor quam mollis id. Nulla nisi neque, consequat vitae nisl sit amet, porttitor tincidunt massa.
<br/><br/>
In hac habitasse platea dictumst. Quisque blandit, tortor ut porttitor facilisis, ipsum libero sodales dui, sit amet suscipit mi ante sed nibh. Vestibulum sit amet ullamcorper orci. Aliquam vel massa in justo cursus pulvinar. In convallis blandit accumsan. Donec ut fermentum justo. Cras eget tincidunt dui, et feugiat lorem. Cras ac aliquet mi, a venenatis dui. Vivamus in tempor dui. Vivamus lacinia blandit scelerisque.
<br/><br/>
Nulla facilisi. Nam placerat lorem neque, quis bibendum metus eleifend id. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam id felis ac sem iaculis vehicula vitae ac quam. Vivamus congue quam ac felis ultrices hendrerit. Proin sed dui efficitur, sodales lorem ut, consequat velit. Mauris eu aliquet neque. Nulla ullamcorper sed sapien id mollis. Cras tempus quis diam quis tempus. Suspendisse pellentesque dui quis sapien faucibus finibus.
<br/><br/>
Suspendisse quis quam lorem. Morbi sodales, orci ut bibendum ultricies, mauris odio facilisis leo, ut egestas eros nibh non ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin id elementum neque. Nam feugiat placerat leo ut blandit. In lacinia sem nibh, sed porttitor neque iaculis quis. Fusce et eleifend lacus. Quisque pharetra eget diam nec facilisis. Nullam porta elementum nibh, id pharetra lacus accumsan non. Pellentesque malesuada, erat in pellentesque hendrerit, mi ex facilisis dui, eu malesuada velit arcu vitae nunc. Mauris sapien odio, rutrum at varius a, ullamcorper at velit. Quisque malesuada sagittis libero. Etiam at quam a orci fringilla dictum vitae a urna.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius nisi a augue laoreet lacinia. Aliquam rutrum dui eget orci ultricies, malesuada vulputate quam tempus. Proin placerat purus nunc, ac placerat mauris sollicitudin non. Sed et erat varius, faucibus elit vel, semper orci. Aliquam lacinia ante eget quam pretium, vel fermentum ex faucibus. Mauris ac diam sit amet diam pharetra lobortis lacinia sit amet eros. Morbi ut euismod enim, sit amet volutpat elit. Duis at auctor ipsum, feugiat feugiat turpis. Praesent sollicitudin volutpat scelerisque.
<br/><br/>
In id ante neque. Aliquam eget tortor risus. Etiam non odio vehicula, luctus enim nec, vestibulum nulla. Phasellus rutrum dolor a lectus commodo laoreet. Curabitur vel porta tortor. Vivamus nulla odio, consequat in orci a, congue elementum nulla. Etiam malesuada tempor felis, efficitur porttitor quam mollis id. Nulla nisi neque, consequat vitae nisl sit amet, porttitor tincidunt massa.
<br/><br/>
In hac habitasse platea dictumst. Quisque blandit, tortor ut porttitor facilisis, ipsum libero sodales dui, sit amet suscipit mi ante sed nibh. Vestibulum sit amet ullamcorper orci. Aliquam vel massa in justo cursus pulvinar. In convallis blandit accumsan. Donec ut fermentum justo. Cras eget tincidunt dui, et feugiat lorem. Cras ac aliquet mi, a venenatis dui. Vivamus in tempor dui. Vivamus lacinia blandit scelerisque.
<br/><br/>
Nulla facilisi. Nam placerat lorem neque, quis bibendum metus eleifend id. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam id felis ac sem iaculis vehicula vitae ac quam. Vivamus congue quam ac felis ultrices hendrerit. Proin sed dui efficitur, sodales lorem ut, consequat velit. Mauris eu aliquet neque. Nulla ullamcorper sed sapien id mollis. Cras tempus quis diam quis tempus. Suspendisse pellentesque dui quis sapien faucibus finibus.
<br/><br/>
Suspendisse quis quam lorem. Morbi sodales, orci ut bibendum ultricies, mauris odio facilisis leo, ut egestas eros nibh non ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin id elementum neque. Nam feugiat placerat leo ut blandit. In lacinia sem nibh, sed porttitor neque iaculis quis. Fusce et eleifend lacus. Quisque pharetra eget diam nec facilisis. Nullam porta elementum nibh, id pharetra lacus accumsan non. Pellentesque malesuada, erat in pellentesque hendrerit, mi ex facilisis dui, eu malesuada velit arcu vitae nunc. Mauris sapien odio, rutrum at varius a, ullamcorper at velit. Quisque malesuada sagittis libero. Etiam at quam a orci fringilla dictum vitae a urna.`;

const body = document.querySelector('body');
body.append(texto);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

//funcion que haga el calculo
const calcularProcetajeScroll  = (event) => {
    const {
        scrollTop, 
        scrollHeight,
        clientHeight
    } = event.target.documentElement;

    return (scrollTop / (scrollHeight - clientHeight)) *100;
}

//Observables (Streams)

const scroll$ = fromEvent(document, 'scroll');

const progress$ = scroll$.pipe(
    map(calcularProcetajeScroll),
    tap( console.log)
);

progress$.subscribe(porcentaje => {
     progressBar.style.width = `${porcentaje}%`
})



