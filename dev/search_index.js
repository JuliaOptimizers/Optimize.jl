var documenterSearchIndex = {"docs":
[{"location":"api/#API-1","page":"API","title":"API","text":"","category":"section"},{"location":"api/#","page":"API","title":"API","text":"Pages = [\"api.md\"]","category":"page"},{"location":"api/#Auxiliary-1","page":"API","title":"Auxiliary","text":"","category":"section"},{"location":"api/#","page":"API","title":"API","text":"active\nbreakpoints\ncompute_Hs_slope_qs!\nlog_header\nlog_row\nproject!\nproject_step!","category":"page"},{"location":"api/#SolverTools.active","page":"API","title":"SolverTools.active","text":"active(x, ℓ, u; rtol = 1e-8, atol = 1e-8)\n\nComputes the active bounds at x, using tolerance min(rtol * (uᵢ-ℓᵢ), atol). If ℓᵢ or uᵢ is not finite, only atol is used.\n\n\n\n\n\n","category":"function"},{"location":"api/#SolverTools.breakpoints","page":"API","title":"SolverTools.breakpoints","text":"nbrk, brkmin, brkmax = breakpoints(x, d, ℓ, u)\n\nFind the smallest and largest values of α such that x + αd lies on the boundary. x is assumed to be feasible. nbrk is the number of breakpoints from x in the direction d.\n\n\n\n\n\n","category":"function"},{"location":"api/#SolverTools.compute_Hs_slope_qs!","page":"API","title":"SolverTools.compute_Hs_slope_qs!","text":"slope, qs = compute_Hs_slope_qs!(Hs, H, s, g)\n\nComputes\n\nHs = H * s\nslope = dot(g,s)\nqs = ¹/₂sᵀHs + slope\n\n\n\n\n\n","category":"function"},{"location":"api/#SolverTools.log_header","page":"API","title":"SolverTools.log_header","text":"log_header(colnames, coltypes)\n\nCreates a header using the names in colnames formatted according to the types in coltypes. Uses internal formatting specification given by SolverTools.formats and default header translation given by SolverTools.default_headers.\n\nInput:\n\ncolnames::Vector{Symbol}: Column names.\ncoltypes::Vector{DataType}: Column types.\n\nKeyword arguments:\n\nhdr_override::Dict{Symbol,String}: Overrides the default headers.\ncolsep::Int: Number of spaces between columns (Default: 2)\n\nSee also log_row.\n\n\n\n\n\n","category":"function"},{"location":"api/#SolverTools.log_row","page":"API","title":"SolverTools.log_row","text":"log_row(vals)\n\nCreates a table row from the values on vals according to their types. Pass the names and types of vals to log_header for a logging table. Uses internal formatting specification given by SolverTools.formats.\n\nTo handle a missing value, add the type instead of the number:\n\n@info log_row(Any[1.0, 1])\n@info log_row(Any[Float64, Int])\n\nPrints\n\n[ Info:  1.0e+00       1\n[ Info:        -       -\n\nKeyword arguments:\n\ncolsep::Int: Number of spaces between columns (Default: 2)\n\n\n\n\n\n","category":"function"},{"location":"api/#SolverTools.project!","page":"API","title":"SolverTools.project!","text":"project!(y, x, ℓ, u)\n\nProjects x into bounds ℓ and u, in the sense of yᵢ = max(ℓᵢ, min(xᵢ, uᵢ)).\n\n\n\n\n\n","category":"function"},{"location":"api/#SolverTools.project_step!","page":"API","title":"SolverTools.project_step!","text":"project_step!(y, x, d, ℓ, u, α = 1.0)\n\nComputes the projected direction y = P(x + α * d) - x.\n\n\n\n\n\n","category":"function"},{"location":"api/#Line-Search-1","page":"API","title":"Line-Search","text":"","category":"section"},{"location":"api/#","page":"API","title":"API","text":"LineModel\nobj\ngrad\ngrad!\nobjgrad\nobjgrad!\nhess\nredirect!\narmijo_wolfe","category":"page"},{"location":"api/#SolverTools.LineModel","page":"API","title":"SolverTools.LineModel","text":"A type to represent the restriction of a function to a direction. Given f : R → Rⁿ, x ∈ Rⁿ and a nonzero direction d ∈ Rⁿ,\n\nϕ = LineModel(nlp, x, d)\n\nrepresents the function ϕ : R → R defined by\n\nϕ(t) := f(x + td).\n\n\n\n\n\n","category":"type"},{"location":"api/#NLPModels.obj","page":"API","title":"NLPModels.obj","text":"obj(f, t) evaluates the objective of the LineModel\n\nϕ(t) := f(x + td).\n\n\n\n\n\n","category":"function"},{"location":"api/#NLPModels.grad","page":"API","title":"NLPModels.grad","text":"grad(f, t) evaluates the first derivative of the LineModel\n\nϕ(t) := f(x + td),\n\ni.e.,\n\nϕ'(t) = ∇f(x + td)ᵀd.\n\n\n\n\n\n","category":"function"},{"location":"api/#NLPModels.grad!","page":"API","title":"NLPModels.grad!","text":"grad!(f, t, g) evaluates the first derivative of the LineModel\n\nϕ(t) := f(x + td),\n\ni.e.,\n\nϕ'(t) = ∇f(x + td)ᵀd.\n\nThe gradient ∇f(x + td) is stored in g.\n\n\n\n\n\n","category":"function"},{"location":"api/#NLPModels.objgrad","page":"API","title":"NLPModels.objgrad","text":"objgrad(f, t) evaluates the objective and first derivative of the LineModel\n\nϕ(t) := f(x + td),\n\nand\n\nϕ'(t) = ∇f(x + td)ᵀd.\n\n\n\n\n\n","category":"function"},{"location":"api/#NLPModels.objgrad!","page":"API","title":"NLPModels.objgrad!","text":"objgrad!(f, t, g) evaluates the objective and first derivative of the LineModel\n\nϕ(t) := f(x + td),\n\nand\n\nϕ'(t) = ∇f(x + td)ᵀd.\n\nThe gradient ∇f(x + td) is stored in g.\n\n\n\n\n\n","category":"function"},{"location":"api/#NLPModels.hess","page":"API","title":"NLPModels.hess","text":"Evaluate the second derivative of the LineModel\n\nϕ(t) := f(x + td),\n\ni.e.,\n\nϕ\"(t) = dᵀ∇²f(x + td)d.\n\n\n\n\n\n","category":"function"},{"location":"api/#SolverTools.redirect!","page":"API","title":"SolverTools.redirect!","text":"redirect!(ϕ, x, d)\n\nChange the values of x and d of the LineModel ϕ, but retains the counters.\n\n\n\n\n\n","category":"function"},{"location":"api/#SolverTools.armijo_wolfe","page":"API","title":"SolverTools.armijo_wolfe","text":"t, good_grad, ht, nbk, nbW = armijo_wolfe(h, h₀, slope, g)\n\nPerforms a line search from x along the direction d as defined by the LineModel h(t) = f(x + t d), where h₀ = h(0) = f(x), slope = h'(0) = ∇f(x)ᵀd and g is a vector that will be overwritten with the gradient at various points. On exit, if good_grad=true, g contains the gradient at the final step length. The steplength is chosen trying to satisfy the Armijo and Wolfe conditions. The Armijo condition is\n\nh(t)  h₀ + τ₀ t h(0)\n\nand the Wolfe condition is\n\nh(t)  τ₁ h(0)\n\nInitially the step is increased trying to satisfy the Wolfe condition. Afterwards, only backtracking is performed in order to try to satisfy the Armijo condition. The final steplength may only satisfy Armijo's condition.\n\nThe output is the following:\n\nt: the step length;\ngood_grad: whether g is the gradient at x + t * d;\nht: the model value at t, i.e., f(x + t * d);\nnbk: the number of times the steplength was decreased to satisfy the Armijo condition, i.e., number of backtracks;\nnbW: the number of times the steplength was increased to satisfy the Wolfe condition.\n\nThe following keyword arguments can be provided:\n\nt: starting steplength (default 1);\nτ₀: slope factor in the Armijo condition (default max(1e-4, √ϵₘ));\nτ₁: slope factor in the Wolfe condition. It should satisfy τ₁ > τ₀ (default 0.9999);\nbk_max: maximum number of backtracks (default 10);\nbW_max: maximum number of increases (default 5);\nverbose: whether to print information (default false).\n\n\n\n\n\n","category":"function"},{"location":"api/#Stats-1","page":"API","title":"Stats","text":"","category":"section"},{"location":"api/#","page":"API","title":"API","text":"GenericExecutionStats\nshow_statuses","category":"page"},{"location":"api/#SolverTools.GenericExecutionStats","page":"API","title":"SolverTools.GenericExecutionStats","text":"GenericExecutionStats(status, nlp; ...)\n\nA GenericExecutionStats is a struct for storing output information of solvers. It contains the following fields:\n\nstatus: Indicates the output of the solver. Use show_statuses() for the full list;\nsolution: The final approximation returned by the solver (default: []);\nobjective: The objective value at solution (default: Inf);\ndual_feas: The dual feasibility norm at solution (default: Inf);\nprimal_feas: The primal feasibility norm at solution (default: 0.0 if uncontrained, Inf otherwise);\nmultipliers: The Lagrange multiplers wrt to the constraints (default: []);\nmultipliers_L: The Lagrange multiplers wrt to the lower bounds on the variables (default: []);\nmultipliers_U: The Lagrange multiplers wrt to the upper bounds on the variables (default: []);\niter: The number of iterations computed by the solver (default: -1);\nelapsed_time: The elapsed time computed by the solver (default: Inf);\ncounters::NLPModels.NLSCounters: The Internal structure storing the number of functions evaluations;\nsolver_specific::Dict{Symbol,Any}: A solver specific dictionary.\n\nThe counters variable is a copy of nlp's counters, and status is mandatory on construction. All other variables can be input as keyword arguments.\n\nNotice that GenericExecutionStats does not compute anything, it simply stores.\n\n\n\n\n\n","category":"type"},{"location":"api/#SolverTools.show_statuses","page":"API","title":"SolverTools.show_statuses","text":"show_statuses()\n\nShow the list of available statuses to use with GenericExecutionStats.\n\n\n\n\n\n","category":"function"},{"location":"api/#Trust-Region-1","page":"API","title":"Trust-Region","text":"","category":"section"},{"location":"api/#","page":"API","title":"API","text":"TrustRegionException\nSolverTools.AbstractTrustRegion\naredpred\nacceptable\nreset!\nget_property\nset_property!\nupdate!\nTrustRegion\nTRONTrustRegion","category":"page"},{"location":"api/#SolverTools.TrustRegionException","page":"API","title":"SolverTools.TrustRegionException","text":"Exception type raised in case of error.\n\n\n\n\n\n","category":"type"},{"location":"api/#SolverTools.AbstractTrustRegion","page":"API","title":"SolverTools.AbstractTrustRegion","text":"AbstractTrustRegion\n\nAn abstract trust region type so that specific trust regions define update rules differently. Child types must have at least the following fields:\n\nacceptance_threshold :: AbstractFloat\ninitial_radius :: AbstractFloat\nradius :: AbstractFloat\nratio :: AbstractFloat\n\nand the following function:\n\nupdate!(tr, step_norm)\n\n\n\n\n\n","category":"type"},{"location":"api/#SolverTools.aredpred","page":"API","title":"SolverTools.aredpred","text":"ared, pred = aredpred(nlp, f, f_trial, Δm, x_trial, step, slope)\n\nCompute the actual and predicted reductions ∆f and Δm, where Δf = f_trial - f is the actual reduction is an objective/merit/penalty function, Δm = m_trial - m is the reduction predicted by the model m of f. We assume that m is being minimized, and therefore that Δm < 0.\n\n\n\n\n\n","category":"function"},{"location":"api/#SolverTools.acceptable","page":"API","title":"SolverTools.acceptable","text":"acceptable(tr)\n\nReturn true if a step is acceptable\n\n\n\n\n\n","category":"function"},{"location":"api/#LinearOperators.reset!","page":"API","title":"LinearOperators.reset!","text":"reset!(tr)\n\nReset the trust-region radius to its initial value\n\n\n\n\n\n","category":"function"},{"location":"api/#SolverTools.get_property","page":"API","title":"SolverTools.get_property","text":"A basic getter for AbstractTrustRegion instances. Should be overhauled when it's possible to overload getfield() and setfield!(). See https://github.com/JuliaLang/julia/issues/1974\n\n\n\n\n\n","category":"function"},{"location":"api/#SolverTools.set_property!","page":"API","title":"SolverTools.set_property!","text":"A basic setter for AbstractTrustRegion instances.\n\n\n\n\n\n","category":"function"},{"location":"api/#SolverTools.update!","page":"API","title":"SolverTools.update!","text":"update!(tr, step_norm)\n\nUpdate the trust-region radius based on the ratio of actual vs. predicted reduction and the step norm.\n\n\n\n\n\n","category":"function"},{"location":"api/#SolverTools.TrustRegion","page":"API","title":"SolverTools.TrustRegion","text":"Basic trust region type.\n\n\n\n\n\n","category":"type"},{"location":"api/#SolverTools.TRONTrustRegion","page":"API","title":"SolverTools.TRONTrustRegion","text":"Trust region used by TRON\n\n\n\n\n\n","category":"type"},{"location":"reference/#Reference-1","page":"Reference","title":"Reference","text":"","category":"section"},{"location":"reference/#","page":"Reference","title":"Reference","text":"","category":"page"},{"location":"#Home-1","page":"Home","title":"SolverTools.jl documentation","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"This package provides tools for developing nonlinear optimization solvers.","category":"page"}]
}
