{
  description = "Grandma's Camp (mvpgc) - Godot 4 game dev environment";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-26.05";
  };
  outputs = { self, nixpkgs }:
    let
      supportedSystems = [ "x86_64-linux" "aarch64-linux" "x86_64-darwin" "aarch64-darwin" ];
      forEachSystem = nixpkgs.lib.genAttrs supportedSystems;
    in
    {
      devShells = forEachSystem (system:
        let
          pkgs = import nixpkgs { inherit system; };
        in
        {
          default = pkgs.mkShell {
            packages = with pkgs; [
              nodejs_24   # Change version as needed (e.g., nodejs_20)
              pnpm
            ];

            shellHook = ''
              echo "Node.js $(node --version) & npm $(npm --version) ready!"
            '';
          };
        });
    };
}
