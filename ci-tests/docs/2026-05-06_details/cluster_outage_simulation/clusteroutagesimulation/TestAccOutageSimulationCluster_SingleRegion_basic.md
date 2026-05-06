# cluster_outage_simulation/clusteroutagesimulation/TestAccOutageSimulationCluster_SingleRegion_basic Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 32) FAIL(x 2)
Success rate: 94.12%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-14 00:49](#error-2026-04-14t0049290000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.05s
[2026-04-16 00:50](#error-2026-04-16t0050310000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69e032578379397d109c2933/clusters | dev | out_of_capacity | 9.06s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS an hour
- 2026-04-08 PASS 45 minutes
- 2026-04-09 PASS 55 minutes
- 2026-04-10 PASS 54 minutes
- 2026-04-11 PASS 44 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS 45 minutes
- 2026-04-14

### Error 2026-04-14T00:49:29+00:00
```
2026-04-14T00:49:29.9821450Z === RUN   TestAccOutageSimulationCluster_SingleRegion_basic
2026-04-14T00:49:29.9822871Z     resource_test.go:22: Creating execution project (1): test-acc-tf-p-4287685626737256821
2026-04-14T00:50:38.5051466Z     resource_test.go:22: 
2026-04-14T00:50:38.5053246Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-14T00:50:38.5056971Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-14T00:50:38.5058955Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-14T00:50:38.5060882Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-04-14T00:50:38.5063016Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/clusteroutagesimulation/resource_test.go:33
2026-04-14T00:50:38.5065458Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/clusteroutagesimulation/resource_test.go:22
2026-04-14T00:50:38.5066339Z         	Error:      	Received unexpected error:
2026-04-14T00:50:38.5068435Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-14T00:50:38.5069644Z         	Test:       	TestAccOutageSimulationCluster_SingleRegion_basic
2026-04-14T00:50:38.5071505Z         	Messages:   	Project creation failed: test-acc-tf-p-4287685626737256821, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-14T00:50:38.5072792Z --- FAIL: TestAccOutageSimulationCluster_SingleRegion_basic (68.52s)
```

- 2026-04-15 PASS 47 minutes
- 2026-04-16

### Error 2026-04-16T00:50:31+00:00
```
2026-04-16T00:50:31.1389164Z === RUN   TestAccOutageSimulationCluster_SingleRegion_basic
2026-04-16T00:50:31.1392050Z     resource_test.go:22: Creating execution project (1): test-acc-tf-p-7786162257402074452
2026-04-16T00:50:34.6251254Z === CONT  TestAccOutageSimulationCluster_SingleRegion_basic
2026-04-16T00:50:39.6294293Z === NAME  TestAccOutageSimulationCluster_SingleRegion_basic
2026-04-16T00:50:39.6298651Z     pre_check.go:46: Time before creating cluster: 2026-04-16T00:50:39.629015353Z, ProjectID: 69e032578379397d109c2933, Cluster name: test-acc-tf-c-3186690331573781289
2026-04-16T00:50:40.6754990Z   
2026-04-16T00:50:40.6755431Z     resource_test.go:22: Step 1/1 error: Error running apply: exit status 1
2026-04-16T00:50:40.6755832Z         
2026-04-16T00:50:40.6756110Z         Error: Error in create
2026-04-16T00:50:40.6756563Z         
2026-04-16T00:50:40.6757114Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-04-16T00:50:40.6757879Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-04-16T00:50:40.6758580Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-04-16T00:50:40.6758938Z         
2026-04-16T00:50:40.6759377Z         cluster name: test-acc-tf-c-3186690331573781289, API error details:
2026-04-16T00:50:40.6760087Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e032578379397d109c2933/clusters
2026-04-16T00:50:40.6760803Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-04-16T00:50:40.6761489Z         region is currently out of capacity for the requested instance size. Reason:
2026-04-16T00:50:40.6762016Z         Conflict. Params: [], BadRequestDetail: 
2026-04-16T00:50:40.7205424Z --- FAIL: TestAccOutageSimulationCluster_SingleRegion_basic (9.58s)
```

- 2026-04-17 PASS 47 minutes
- 2026-04-18 PASS 45 minutes
- 2026-04-19: MISSING
- 2026-04-20 PASS 44 minutes
- 2026-04-21 PASS 49 minutes
- 2026-04-22 PASS an hour
- 2026-04-23 PASS 55 minutes
- 2026-04-24 PASS 49 minutes
- 2026-04-25 PASS 44 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 43 minutes
- 2026-04-28 PASS 46 minutes
- 2026-04-29 PASS 47 minutes
- 2026-04-30 PASS 58 minutes
- 2026-05-01 PASS 45 minutes
- 2026-05-02 PASS 42 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 45 minutes
- 2026-05-05 PASS 59 minutes
- 2026-05-06 PASS an hour

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 43 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 46 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 43 minutes
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 44 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 44 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 45 minutes
- 2026-05-04 PASS 44 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 45 minutes
