function keyPush(env) {
  switch (env.keyCode) {
    case 37: xd = -1; yd = 0; break;
    case 38: xd = 0; yd = -1; break;
    case 39: xd = 1; yd = 0; break;
    case 40: xd = 0; yd = 1; break;
    case 65: xd = -1; yd = 0; break;//a
    case 87: xd = 0; yd = -1; break;//w
    case 68: xd = 1; yd = 0; break;//s
    case 83: xd = 0; yd = 1; break;//d
  }
}
