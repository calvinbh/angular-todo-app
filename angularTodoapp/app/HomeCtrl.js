app.controller('HomeCtrl', function HomeCtrl($scope) {
    $scope.todos = [{ val: "Meeting tomorrow @ 2pm", completed: false },
                    { val: "Plan Vaction", completed: false },
                    { val: "Study Node.js", completed: false }, ];

    $scope.todo = function (val, completed) {
        this.val = val;
        this.completed = false;    
    };

    $scope.addNewTodo = function () {
        var todo = new $scope.todo($scope.todo.val, $scope.todo.completed);
        $scope.todos.unshift(todo);
        $scope.newTodo = '';
    };

    $scope.removeTodo = function (index) {
        $scope.todos.splice(index, 1);
    };
    
});