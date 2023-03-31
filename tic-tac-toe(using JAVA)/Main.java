import java.util.Scanner;

class Main {
  public static void main(String[] args) {
    char[][] board = new char[3][3];
    for (int row = 0; row < board.length; row++) {
      for (int col = 0; col < board[row].length; col++) {
        board[row][col] = ' ';// initially the whole matrix is empty
      }
    }

    char player = 'X';// initial player is X
    boolean gameOver = false;// atfirst the game status is gameOver
    Scanner scanner = new Scanner(System.in);

    while (!gameOver) {
      printBoard(board);// till the game is not over we have to print the board
      System.out.print("Player " + player + " enter: ");// now player is X & he is choosing his move initially
      int row = scanner.nextInt();// x's choosen row initially
      int col = scanner.nextInt();// X's choosen column initially
      System.out.println();

      if (board[row][col] == ' ') {// here we are checking if the choosen move is empty or not .if empty then we can move our X there else invalid move
        board[row][col] = player; // place the element 
        gameOver = haveWon(board, player);// game will automatically stop once the player has won
        if (gameOver) {
          System.out.println("Player " + player + " has won: ");// if current player has won it will print 
        } else {
          if(player == 'X') {
          player = 'O';
          } else {
          player = 'X';
          }
        //   player = (player == 'X') ? 'O' : 'X';// switching between players  between 'X' and 'O'
        }
      } else {
        System.out.println("Invalid move. Try again!");
      }
    }
    printBoard(board);
  }

  public static boolean haveWon(char[][] board, char player) {
    // here we have check column wise,diagonally,row wise
    // check the rows
    for (int row = 0; row < board.length; row++) {
      if (board[row][0] == player && board[row][1] == player && board[row][2] == player) {
        return true;
      }
    }

    // check for col
    for (int col = 0; col < board[0].length; col++) {
      if (board[0][col] == player && board[1][col] == player && board[2][col] == player) {
        return true;
      }
    }

    // diagonal
    if (board[0][0] == player && board[1][1] == player && board[2][2] == player) {
      return true;
    }

    if (board[0][2] == player && board[1][1] == player && board[2][0] == player) {
      return true;
    }
    return false;
  }

  public static void printBoard(char[][] board) {
    for (int row = 0; row < board.length; row++) {
      for (int col = 0; col < board[row].length; col++) {
        System.out.print(board[row][col] + " | ");
      }
      System.out.println();
    }
  }
}