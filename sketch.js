var tela = 1;
var X = 227; var X2 = 188; var X3 = 200; var X4 = 5;
var Y1 = 210;var Y2 = 285; var Y3 = 370; var Y4 = 495; var Y5 = 455; var Y6 = 400; var Y7 = 360; var Y8 = 330; var Y9 = 360; var Y10 = 390; var Y11 = 420; var Y12 = 285; var Y13 = 315; var Y14 = 350; var Y15 = 380;
var xvoltar = 10;var xvoltar2 = 510; var bvoltar = 515;
var voltar= 40; var voltar2 = 75; 
var H = 46;
var L = 183; var L2 = 585; var L3 = 250; 

function setup()
{
    createCanvas(610, 580);
}
function preload()
{
    menu = loadImage('menu.png');
    info = loadImage('informacao.png');
    creditos = loadImage('creditos.png');
    proximo = loadSound('proximo.wav');
    prox = loadImage('proximo.png');
    prox1 = loadImage('proxima2.png');
    derrota = loadImage('gameover.png');
    vitoria = loadImage('vitoria.png');
    questao1 = loadImage('questao1.png');
    questao2 = loadImage('questao2.png');
    questao3 = loadImage('questao3.png');
    questao4 = loadImage('questao4.png');
    questao5 = loadImage('questao5.png');
    questao6 = loadImage('questao6.png');
    questao7 = loadImage('questao7.png');
    questao8 = loadImage('questao8.png');
    questao9 = loadImage('questao9.png');  
    questao10 = loadImage('questao10.png');
}

function draw()
{
  
  //menu
    if(tela==1)
    {
    image(menu,0,0)

    if(mouseX > X && mouseX < X + L && mouseY > Y1 && mouseY < Y1 + H)
        {
            noStroke();
            noFill();
            rect(X, Y1, L, H, 15);
            if(mouseIsPressed)
            {
                tela=4
                proximo.play()
                proximo.amp(0.5)
            }
        }
        if(mouseX > X2 && mouseX < X2 + L2 && mouseY > Y2 && mouseY < Y2 + H)
        {
            noStroke();
            noFill();
            rect(X2, Y2, L2, H, 15);
            if(mouseIsPressed)
            {
                tela=2
                proximo.play()
                proximo.amp(0.5)
            }
        }

        if(mouseX > X3 && mouseX < X3 + L3 && mouseY > Y3 && mouseY < Y3 + H)
        {
            noStroke();
            noFill();
            rect(X3, Y3, L3, H, 15);
            if(mouseIsPressed)
            {
                tela=3
                proximo.play()
                proximo.amp(0.5)
            }
        }
    }

  //informações
    else if(tela==2)
    {
        image(info, 0, 0)

        if(mouseX > xvoltar && mouseX < xvoltar + voltar2 && mouseY > bvoltar && mouseY < bvoltar + voltar)
        {
            noStroke();
            noFill();
            rect(xvoltar, bvoltar, voltar2, voltar, 15);
            if(mouseIsPressed)
            {
                tela=1;
                proximo.play()
                proximo.amp(0.5)
            }
        }
    }

  //creditos
    else if(tela==3)
    {
        image(creditos, 0, 0)

       if(mouseX > xvoltar && mouseX < xvoltar + voltar2 && mouseY > bvoltar && mouseY < bvoltar + voltar)
        {
            noStroke();
            noFill();
            rect(xvoltar, bvoltar, voltar2, voltar, 15);
            if(mouseIsPressed)
            {
                tela=1;
                proximo.play()
                proximo.amp(0.5)
            }
        }
    }
  
  //questao 01
    else if(tela==4)
    {
      image(questao1, 0, 0)

       if(mouseX > X4 && mouseX < X4 + L2 && mouseY > Y4 && mouseY < Y4 + H+5)
        {
            stroke(20);
            noFill();
            rect(X4, Y4, L2, H+5, 15);
            if(mouseIsPressed)
            {
                tela=30;
                proximo.play()
                proximo.amp(0.5)
            }      
        }  
      if(mouseX > X4 && mouseX < X4 + L2-10 && mouseY > Y5 && mouseY < Y5 + H-10)
        {
            stroke(20);
            noFill();
            rect(X4, Y5, L2-10, H-10, 15);
            if(mouseIsPressed)
            {
                tela=5;
                proximo.play()
                proximo.amp(0.5)
            }      
        }
      if(mouseX > X4 && mouseX < X4 + L2+10 && mouseY > Y6 && mouseY < Y6 + H+5)
        {
            stroke(20);
            noFill();
            rect(X4, Y6, L2+10, H+5, 15);
            if(mouseIsPressed)
            {
                tela=30;
                proximo.play()
                proximo.amp(0.5)
            }      
        }
      if(mouseX > X4 && mouseX < X4 + L2-10 && mouseY > Y7 && mouseY < Y7 + H-10)
        {
            stroke(20);
            noFill();
            rect(X4, Y7, L2-10, H-10, 15);
            if(mouseIsPressed)
            {
                tela=30;
                proximo.play()
                proximo.amp(0.5)
            }      
        }
      if(mouseX > X4 && mouseX < X4 + L2+5 && mouseY > Y8 && mouseY < Y8 + H-20)
        {
            stroke(20);
            noFill();
            rect(X4, Y8, L2+5, H-20, 15);
            if(mouseIsPressed)
            {
                tela=30;
                proximo.play()
                proximo.amp(0.5)
            }      
        }
    }
  
  //passou de fase
    else if(tela==5)
    {
        image(prox, 0, 0)

       if(mouseX > xvoltar2 && mouseX < xvoltar2 + voltar2 && mouseY > bvoltar && mouseY < bvoltar + voltar)
        {
            noStroke();
            noFill();
            rect(xvoltar2, bvoltar, voltar2, voltar, 15);
            if(mouseIsPressed)
            {
                tela=6;
                proximo.play()
                proximo.amp(0.5)
            }
        }
    }
  
  //questao 02
    else if(tela==6)
    {
      image(questao2, 0, 0)

       if(mouseX > X4 && mouseX < X4 + L2 && mouseY > Y4 && mouseY < Y4 + H-20)
        {
            stroke(20);
            noFill();
            rect(X4, Y4, L2, H-20, 15);
            if(mouseIsPressed)
            {
                tela=7;
                proximo.play()
                proximo.amp(0.5)
            }      
        }  
      if(mouseX > X4 && mouseX < X4 + L2-10 && mouseY > Y5 && mouseY < Y5 + H-5)
        {
            stroke(20);
            noFill();
            rect(X4, Y5-5, L2-10, H-5, 15);
            if(mouseIsPressed)
            {
                tela=30;
                proximo.play()
                proximo.amp(0.5)
            }      
        }
      if(mouseX > X4 && mouseX < X4 + L2+10 && mouseY > Y11 && mouseY < Y11 + H-15)
        {
            stroke(20);
            noFill();
            rect(X4, Y11, L2+10, H-15, 15);
            if(mouseIsPressed)
            {
                tela=30;
                proximo.play()
                proximo.amp(0.5)
            }      
        }
      if(mouseX > X4 && mouseX < X4 + L2-10 && mouseY > Y10 && mouseY < Y10 + H-15)
        {
            stroke(20);
            noFill();
            rect(X4, Y10, L2-10, H-15, 15);
            if(mouseIsPressed)
            {
                tela=30;
                proximo.play()
                proximo.amp(0.5)
            }      
        }
      if(mouseX > X4 && mouseX < X4 + L2+5 && mouseY > Y9 && mouseY < Y9 + H-20)
        {
            stroke(20);
            noFill();
            rect(X4, Y9, L2+5, H-20, 15);
            if(mouseIsPressed)
            {
                tela=30;
                proximo.play()
                proximo.amp(0.5)
            }      
        }
    }
  
  //passou de fase
    else if(tela==7)
    {
        image(prox, 0, 0)

       if(mouseX > xvoltar2 && mouseX < xvoltar2 + voltar2 && mouseY > bvoltar && mouseY < bvoltar + voltar)
        {
            noStroke();
            noFill();
            rect(xvoltar2, bvoltar, voltar2, voltar, 15);
            if(mouseIsPressed)
            {
                tela=8;
                proximo.play()
                proximo.amp(0.5)
            }
        }
    }
  
  //questao 03
    else if(tela==8)
      {
        image(questao3, 0, 0)

       if(mouseX > X4 && mouseX < X4 + L2+20 && mouseY > Y15+35 && mouseY < Y15+35 + H-20)
        {
            stroke(20);
            noFill();
            rect(X4, Y15+35, L2+20, H-20, 15);
            if(mouseIsPressed)
            {
                tela=30;
                proximo.play()
                proximo.amp(0.5)
            }      
        }  
      if(mouseX > X4 && mouseX < X4 + L2-10 && mouseY > Y15 && mouseY < Y15 + H-15)
        {
            stroke(20);
            noFill();
            rect(X4, Y15, L2-10, H-15, 15);
            if(mouseIsPressed)
            {
                tela=30;
                proximo.play()
                proximo.amp(0.5)
            }      
        }
      if(mouseX > X4 && mouseX < X4 + L2+10 && mouseY > Y14 && mouseY < Y14 + H-20)
        {
            stroke(20);
            noFill();
            rect(X4, Y14, L2+10, H-20, 15);
            if(mouseIsPressed)
            {
                tela=30;
                proximo.play()
                proximo.amp(0.5)
            }      
        }
      if(mouseX > X4 && mouseX < X4 + L2+5 && mouseY > Y13 && mouseY < Y13 + H-15)
        {
            stroke(20);
            noFill();
            rect(X4, Y13, L2+5, H-15, 15);
            if(mouseIsPressed)
            {
                tela=9;
                proximo.play()
                proximo.amp(0.5)
            }      
        }
      if(mouseX > X4 && mouseX < X4 + L2+5 && mouseY > Y12 && mouseY < Y12 + H-20)
        {
            stroke(20);
            noFill();
            rect(X4, Y12, L2+5, H-20, 15);
            if(mouseIsPressed)
            {
                tela=30;
                proximo.play()
                proximo.amp(0.5)
            }      
        }
    }
  
  //passou de fase
    else if(tela==9)
    {
        image(prox, 0, 0)

       if(mouseX > xvoltar2 && mouseX < xvoltar2 + voltar2 && mouseY > bvoltar && mouseY < bvoltar + voltar)
        {
            noStroke();
            noFill();
            rect(xvoltar2, bvoltar, voltar2, voltar, 15);
            if(mouseIsPressed)
            {
                tela=10;
                proximo.play()
                proximo.amp(0.5)
            }
        }
    }
  
  //questao 04
    else if(tela==10)
      {
        image(questao4, 0, 0)
        
      if(mouseX > X4 && mouseX < X4 + L2+20 && mouseY > Y1-45 && mouseY < Y1-45 + H-20)
        {
            stroke(20);
            noFill();
            rect(X4, Y1-45, L2+20, H-20, 15);
            if(mouseIsPressed)
            {
                tela=30;
                proximo.play()
                proximo.amp(0.5)
            }      
        }  
      if(mouseX > X4 && mouseX < X4 + L2+15 && mouseY > Y1-15 && mouseY < Y1-15 + H-15)
        {
            stroke(20);
            noFill();
            rect(X4, Y1-15, L2+15, H-15, 15);
            if(mouseIsPressed)
            {
                tela=11;
                proximo.play()
                proximo.amp(0.5)
            }      
        }
      if(mouseX > X4 && mouseX < X4 + L2-10 && mouseY > Y1+20 && mouseY < Y1+20 + H-20)
        {
            stroke(20);
            noFill();
            rect(X4, Y1+20, L2-10, H-20, 15);
            if(mouseIsPressed)
            {
                tela=30;
                proximo.play()
                proximo.amp(0.5)
            }      
        }
      if(mouseX > X4 && mouseX < X4 + L2+5 && mouseY > Y12-25 && mouseY < Y12-25 + H-15)
        {
            stroke(20);
            noFill();
            rect(X4, Y12-25, L2+5, H-15, 15);
            if(mouseIsPressed)
            {
                tela=30;
                proximo.play()
                proximo.amp(0.5)
            }      
        }
      if(mouseX > X4 && mouseX < X4 + L2-20 && mouseY > Y12+5 && mouseY < Y12+5 + H-25)
        {
            stroke(20);
            noFill();
            rect(X4, Y12+5, L2-20, H-25, 15);
            if(mouseIsPressed)
            {
                tela=30;
                proximo.play()
                proximo.amp(0.5)
            }      
        }
      }
  
  //passou de fase
    else if(tela==11)
    {
        image(prox, 0, 0)

       if(mouseX > xvoltar2 && mouseX < xvoltar2 + voltar2 && mouseY > bvoltar && mouseY < bvoltar + voltar)
        {
            noStroke();
            noFill();
            rect(xvoltar2, bvoltar, voltar2, voltar, 15);
            if(mouseIsPressed)
            {
                tela=12;
                proximo.play()
                proximo.amp(0.5)
            }
        }
    }
  
  //questao 05
    else if(tela==12)
      {
        image(questao5, 0, 0)
        
      if(mouseX > X4 && mouseX < X4 + L2+20 && mouseY > Y1+10 && mouseY < Y1+10 + H+10)
        {
            stroke(20);
            noFill();
            rect(X4, Y1+10, L2+20, H+10, 15);
            if(mouseIsPressed)
            {
                tela=13;
                proximo.play()
                proximo.amp(0.5)
            }      
        }  
      if(mouseX > X4 && mouseX < X4 + L2+10 && mouseY > Y1-45 && mouseY < Y1-40 + H)
        {
            stroke(20);
            noFill();
            rect(X4, Y1-45, L2+10, H, 15);
            if(mouseIsPressed)
            {
                tela=30;
                proximo.play()
                proximo.amp(0.5)
            }      
        }
      if(mouseX > X4 && mouseX < X4 + L2+10 && mouseY > Y13-30 && mouseY < Y13-30 + H)
        {
            stroke(20);
            noFill();
            rect(X4, Y13-30, L2+10, H, 15);
            if(mouseIsPressed)
            {
                tela=30;
                proximo.play()
                proximo.amp(0.5)
            }      
        }
      if(mouseX > X4 && mouseX < X4 + L2+10 && mouseY > Y14-10 && mouseY < Y14-10 + H-10)
        {
            stroke(20);
            noFill();
            rect(X4, Y14-10, L2+10, H-10, 15);
            if(mouseIsPressed)
            {
                tela=30;
                proximo.play()
                proximo.amp(0.5)
            }      
        }
      if(mouseX > X4 && mouseX < X4 + L2-50 && mouseY > Y15 && mouseY < Y15 + H+5)
        {
            stroke(20);
            noFill();
            rect(X4, Y15, L2+15, H+5, 15);
            if(mouseIsPressed)
            {
                tela=30;
                proximo.play()
                proximo.amp(0.5)
            }      
        }
    }
  
  //passou de fase
    else if(tela==13)
    {
        image(prox1, 0, 0)

       if(mouseX > xvoltar2+15 && mouseX < xvoltar2+15 + voltar2 && mouseY > bvoltar+25 && mouseY < bvoltar+25 + voltar-5)
        {
            noStroke();
            noFill();
            rect(xvoltar2+15, bvoltar+25, voltar2, voltar-5, 15);
            if(mouseIsPressed)
            {
                tela=14;
                proximo.play()
                proximo.amp(0.5)
            }
        }
    }
  
  //questao 06
    else if(tela==14)
      {
        image(questao6, 0, 0)
        
      if(mouseX > X4 && mouseX < X4 + L2+20 && mouseY > Y1+55 && mouseY < Y1+55 + H)
        {
            stroke(20);
            noFill();
            rect(X4, Y1+55, L2+20, H, 15);
            if(mouseIsPressed)
            {
                tela=30;
                proximo.play()
                proximo.amp(0.5)
            }      
        }  
      if(mouseX > X4 && mouseX < X4 + L2+10 && mouseY > Y1+110 && mouseY < Y1+110 + H-10)
        {
            stroke(20);
            noFill();
            rect(X4, Y1+110, L2+10, H-10, 15);
            if(mouseIsPressed)
            {
                tela=30;
                proximo.play()
                proximo.amp(0.5)
            }      
        }
      if(mouseX > X4 && mouseX < X4 + L2-10 && mouseY > Y5-27 && mouseY < Y5-27 + H+10)
        {
            stroke(20);
            noFill();
            rect(X4, Y5-27, L2-10, H+10, 15);
            if(mouseIsPressed)
            {
                tela=30;
                proximo.play()
                proximo.amp(0.5)
            }      
        }
      if(mouseX > X4 && mouseX < X4 + L2+15 && mouseY > Y13+45 && mouseY < Y13+45 + H+15)
        {
            stroke(20);
            noFill();
            rect(X4, Y13+45, L2+15, H+15, 15);
            if(mouseIsPressed)
            {
                tela=30;
                proximo.play()
                proximo.amp(0.5)
            }      
        }
      if(mouseX > X4 && mouseX < X4 + L2+15 && mouseY > Y5+35 && mouseY < Y5+35 + H-5)
        {
            stroke(20);
            noFill();
            rect(X4, Y5+35, L2+15, H-5, 15);
            if(mouseIsPressed)
            {
                tela=15;
                proximo.play()
                proximo.amp(0.5)
            }      
        }
    }
  
  //passou de fase
    else if(tela==15)
    {
        image(prox1, 0, 0)

       if(mouseX > xvoltar2+15 && mouseX < xvoltar2+15 + voltar2 && mouseY > bvoltar+25 && mouseY < bvoltar+25 + voltar-5)
        {
            noStroke();
            noFill();
            rect(xvoltar2+15, bvoltar+25, voltar2, voltar-5, 15);
            if(mouseIsPressed)
            {
                tela=16;
                proximo.play()
                proximo.amp(0.5)
            }
        }
    }
  
  //questao 07
    else if(tela==16)
      {
        image(questao7, 0, 0)
        
      if(mouseX > X4 && mouseX < X4 + L2+10 && mouseY > Y8-30 && mouseY < Y8-30 + H-10)
        {
            stroke(20);
            noFill();
            rect(X4, Y8-30, L2+10, H-10, 15);
            if(mouseIsPressed)
            {
                tela=30;
                proximo.play()
                proximo.amp(0.5)
            }      
        }  
      if(mouseX > X4 && mouseX < X4 + L2-20 && mouseY > Y9-20 && mouseY < Y9-20 + H+5)
        {
            stroke(20);
            noFill();
            rect(X4, Y9-20, L2-20, H+5, 15);
            if(mouseIsPressed)
            {
                tela=30;
                proximo.play()
                proximo.amp(0.5)
            }      
        }
      if(mouseX > X4 && mouseX < X4 + L2+10 && mouseY > Y9+35 && mouseY < Y9+35 + H-5)
        {
            stroke(20);
            noFill();
            rect(X4, Y9+35, L2+10, H-5, 15);
            if(mouseIsPressed)
            {
                tela=30;
                proximo.play()
                proximo.amp(0.5)
            }      
        }
      if(mouseX > X4 && mouseX < X4 + L2 && mouseY > Y4-55 && mouseY < Y4-55 + H+12)
        {
            stroke(20);
            noFill();
            rect(X4, Y4-55, L2, H+12, 15);
            if(mouseIsPressed)
            {
                tela=17;
                proximo.play()
                proximo.amp(0.5)
            }      
        }
      if(mouseX > X4 && mouseX < X4 + L2+5 && mouseY > Y4+10 && mouseY < Y4+10 + H)
        {
            stroke(20);
            noFill();
            rect(X4, Y4+10, L2+5, H, 15);
            if(mouseIsPressed)
            {
                tela=30;
                proximo.play()
                proximo.amp(0.5)
            }      
        }
      }
  
  //passou de fase
    else if(tela==17)
    {
        image(prox, 0, 0)

       if(mouseX > xvoltar2 && mouseX < xvoltar2 + voltar2 && mouseY > bvoltar && mouseY < bvoltar + voltar)
        {
            noStroke();
            noFill();
            rect(xvoltar2, bvoltar, voltar2, voltar, 15);
            if(mouseIsPressed)
            {
                tela=18;
                proximo.play()
                proximo.amp(0.5)
            }
        }
    }
  
  //questao 08
    else if(tela==18)
      {
        image(questao8, 0, 0)
        
      if(mouseX > X4 && mouseX < X4 + L2+10 && mouseY > Y9+5 && mouseY < Y9+5 + H-5)
        {
            stroke(20);
            noFill();
            rect(X4, Y9+5, L2+10, H-5, 15);
            if(mouseIsPressed)
            {
                tela=30;
                proximo.play()
                proximo.amp(0.5)
            }      
        }  
      if(mouseX > X4 && mouseX < X4 + L2-20 && mouseY > Y9+50 && mouseY < Y9+50 + H-5)
        {
            stroke(20);
            noFill();
            rect(X4, Y9+50, L2-20, H-5, 15);
            if(mouseIsPressed)
            {
                tela=30;
                proximo.play()
                proximo.amp(0.5)
            }      
        }
      if(mouseX > X4 && mouseX < X4 + L2 && mouseY > Y5 && mouseY < Y5 + H-10)
        {
            stroke(20);
            noFill();
            rect(X4, Y5, L2, H-10, 15);
            if(mouseIsPressed)
            {
                tela=19;
                proximo.play()
                proximo.amp(0.5)
            }      
        }
      if(mouseX > X4 && mouseX < X4 + L2+5 && mouseY > Y4 && mouseY < Y4 + H-5)
        {
            stroke(20);
            noFill();
            rect(X4, Y4, L2+5, H-5, 15);
            if(mouseIsPressed)
            {
                tela=30;
                proximo.play()
                proximo.amp(0.5)
            }      
        }
      if(mouseX > X4 && mouseX < X4 + L2-40 && mouseY > Y4+45 && mouseY < Y4+45 + H-15)
        {
            stroke(20);
            noFill();
            rect(X4, Y4+45, L2-40, H-15, 15);
            if(mouseIsPressed)
            {
                tela=30;
                proximo.play()
                proximo.amp(0.5)
            }      
        }
      }
  
  //passou de fase
    else if(tela==19)
    {
        image(prox1, 0, 0)

       if(mouseX > xvoltar2+15 && mouseX < xvoltar2+15 + voltar2 && mouseY > bvoltar+25 && mouseY < bvoltar+25 + voltar-5)
        {
            noStroke();
            noFill();
            rect(xvoltar2+15, bvoltar+25, voltar2, voltar-5, 15);
            if(mouseIsPressed)
            {
                tela=20;
                proximo.play()
                proximo.amp(0.5)
            }
        }
    }
  
  //questao 09
    else if(tela==20)
      {
        image(questao9, 0, 0)
        
      if(mouseX > X4 && mouseX < X4 + L2+10 && mouseY > Y8-20 && mouseY < Y8-20 + H)
        {
            stroke(20);
            noFill();
            rect(X4, Y8-20, L2+10, H, 15);
            if(mouseIsPressed)
            {
                tela=30;
                proximo.play()
                proximo.amp(0.5)
            }      
        }  
      if(mouseX > X4 && mouseX < X4 + L2 && mouseY > Y9 && mouseY < Y9 + H+15)
        {
            stroke(20);
            noFill();
            rect(X4, Y9, L2, H+15, 15);
            if(mouseIsPressed)
            {
                tela=30;
                proximo.play()
                proximo.amp(0.5)
            }      
        }
      if(mouseX > X4 && mouseX < X4 + L2 && mouseY > Y10+35 && mouseY < Y10+35 + H+15)
        {
            stroke(20);
            noFill();
            rect(X4, Y10+35, L2, H+15, 15);
            if(mouseIsPressed)
            {
                tela=21;
                proximo.play()
                proximo.amp(0.5)
            }      
        }
      if(mouseX > X4 && mouseX < X4 + L2+5 && mouseY > Y4-5 && mouseY < Y4-5 + H+15)
        {
            stroke(20);
            noFill();
            rect(X4, Y4-5, L2+5, H+10, 15);
            if(mouseIsPressed)
            {
                tela=30;
                proximo.play()
                proximo.amp(0.5)
            }      
        }
      }
  
  //passou de fase
    else if(tela==21)
    {
        image(prox, 0, 0)

       if(mouseX > xvoltar2 && mouseX < xvoltar2 + voltar2 && mouseY > bvoltar && mouseY < bvoltar + voltar)
        {
            noStroke();
            noFill();
            rect(xvoltar2, bvoltar, voltar2, voltar, 15);
            if(mouseIsPressed)
            {
                tela=22;
                proximo.play()
                proximo.amp(0.5)
            }
        }
    }
  
  //questao 10
    else if(tela==22)
      {
        image(questao10, 0, 0)
        
      if(mouseX > X4 && mouseX < X4 + L2-10 && mouseY > Y9 && mouseY < Y9 + H-25)
        {
            stroke(20);
            noFill();
            rect(X4, Y9, L2-10, H-25, 15);
            if(mouseIsPressed)
            {
                tela=30;
                proximo.play()
                proximo.amp(0.5)
            }      
        }  
      if(mouseX > X4 && mouseX < X4 + L2 && mouseY > Y9+20 && mouseY < Y9+20 + H-25)
        {
            stroke(20);
            noFill();
            rect(X4, Y9+20, L2, H-25, 15);
            if(mouseIsPressed)
            {
                tela=30;
                proximo.play()
                proximo.amp(0.5)
            }      
        }
      if(mouseX > X4 && mouseX < X4 + L2 && mouseY > Y9+42 && mouseY < Y9+42 + H-25)
        {
            stroke(20);
            noFill();
            rect(X4, Y9+42, L2, H-25, 15);
            if(mouseIsPressed)
            {
                tela=23;
                proximo.play()
                proximo.amp(0.5)
            }      
        }
      if(mouseX > X4 && mouseX < X4 + L2+5 && mouseY > Y10+35 && mouseY < Y10+35 + H-25)
        {
            stroke(20);
            noFill();
            rect(X4, Y10+35, L2+5, H-25, 15);
            if(mouseIsPressed)
            {
                tela=30;
                proximo.play()
                proximo.amp(0.5)
            }      
        }
      if(mouseX > X4 && mouseX < X4 + L2+5 && mouseY > Y11+25 && mouseY < Y11+25 + H-25)
        {
            stroke(20);
            noFill();
            rect(X4, Y11+25, L2+5, H-25, 15);
            if(mouseIsPressed)
            {
                tela=30;
                proximo.play()
                proximo.amp(0.5)
            }      
        }
      }
  
  //vitoria
    else if(tela==23)
    {
        image(vitoria, 0, 0)

       if(mouseX > xvoltar2 && mouseX < xvoltar2 + voltar2 && mouseY > bvoltar && mouseY < bvoltar + voltar)
        {
            noStroke();
            noFill();
            rect(xvoltar2, bvoltar, voltar2, voltar, 15);
            if(mouseIsPressed)
            {
                tela=1;
                proximo.play()
                proximo.amp(0.5)
            }
        }
    }
  
  //derrota
    else if(tela==30)
    {
        image(derrota, 0, 0)

       if(mouseX > xvoltar && mouseX < xvoltar + voltar2 && mouseY > bvoltar && mouseY < bvoltar + voltar)
        {
            noStroke();
            noFill();
            rect(xvoltar, bvoltar, voltar2, voltar, 15);
            if(mouseIsPressed)
            {
                tela=1;
                proximo.play()
                proximo.amp(0.5)
            }
        }
    }
}