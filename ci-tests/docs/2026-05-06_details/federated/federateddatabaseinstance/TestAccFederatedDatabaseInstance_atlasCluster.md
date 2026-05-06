# federated/federateddatabaseinstance/TestAccFederatedDatabaseInstance_atlasCluster Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 31) FAIL(x 3)
Success rate: 91.18%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-11 00:46](#error-2026-04-11t0046520000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.07s
[2026-04-16 00:56](#error-2026-04-16t0056270000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69e0325b1ec945fedc71a577/clusters | dev | out_of_capacity | 6.05s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 46 minutes
- 2026-04-08 PASS 14 minutes
- 2026-04-09 PASS 24 minutes
- 2026-04-10 PASS 22 minutes
- 2026-04-11

### Error 2026-04-11T00:46:52+00:00
```
2026-04-11T00:46:52.5721836Z === RUN   TestAccFederatedDatabaseInstance_atlasCluster
2026-04-11T00:46:52.5722596Z     resource_federated_database_instance_test.go:158: Creating execution project (1): test-acc-tf-p-3413458871466645904
2026-04-11T00:46:52.5723272Z     resource_federated_database_instance_test.go:158: 
2026-04-11T00:46:52.5725111Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-11T00:46:52.5727195Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-11T00:46:52.5729072Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-11T00:46:52.5730841Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-04-11T00:46:52.5733102Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/federateddatabaseinstance/resource_federated_database_instance_test.go:158
2026-04-11T00:46:52.5734738Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-04-11T00:46:52.5735260Z         	Error:      	Received unexpected error:
2026-04-11T00:46:52.5737263Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:46:52.5738379Z         	Test:       	TestAccFederatedDatabaseInstance_atlasCluster
2026-04-11T00:46:52.5740229Z         	Messages:   	Project creation failed: test-acc-tf-p-3413458871466645904, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:46:52.5741501Z --- FAIL: TestAccFederatedDatabaseInstance_atlasCluster (61.69s)
```

- 2026-04-12: MISSING
- 2026-04-13 PASS 16 minutes
- 2026-04-14 PASS 18 minutes
- 2026-04-15 PASS 20 minutes
- 2026-04-16

### Error 2026-04-16T00:56:27+00:00
```
2026-04-16T00:56:27.5642647Z === RUN   TestAccFederatedDatabaseInstance_atlasCluster
2026-04-16T00:56:27.5647879Z === CONT  TestAccFederatedDatabaseInstance_atlasCluster
2026-04-16T00:56:27.5650916Z === NAME  TestAccFederatedDatabaseInstance_atlasCluster
2026-04-16T00:56:27.5652699Z     pre_check.go:46: Time before creating cluster: 2026-04-16T00:55:28.627613256Z, ProjectID: 69e0325b1ec945fedc71a577, Cluster name: test-acc-tf-c-6099830885535926593
2026-04-16T00:56:27.5695615Z   
2026-04-16T00:56:27.5696583Z     resource_federated_database_instance_test.go:171: Step 1/1 error: Error running apply: exit status 1
2026-04-16T00:56:27.5697454Z         
2026-04-16T00:56:27.5697925Z         Error: Error in create
2026-04-16T00:56:27.5698369Z         
2026-04-16T00:56:27.5699065Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-04-16T00:56:27.5700428Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-04-16T00:56:27.5701719Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-04-16T00:56:27.5702353Z         
2026-04-16T00:56:27.5703134Z         cluster name: test-acc-tf-c-6099830885535926593, API error details:
2026-04-16T00:56:27.5704650Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e0325b1ec945fedc71a577/clusters
2026-04-16T00:56:27.5705961Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-04-16T00:56:27.5707198Z         region is currently out of capacity for the requested instance size. Reason:
2026-04-16T00:56:27.5708319Z         Conflict. Params: [], BadRequestDetail: 
2026-04-16T00:56:27.5708860Z         
2026-04-16T00:56:27.5709328Z         Error: Error in create
2026-04-16T00:56:27.5709770Z         
2026-04-16T00:56:27.5710423Z           with mongodbatlas_advanced_cluster.cluster2,
2026-04-16T00:56:27.5711732Z           on terraform_plugin_test.tf line 39, in resource "mongodbatlas_advanced_cluster" "cluster2":
2026-04-16T00:56:27.5712951Z           39: resource "mongodbatlas_advanced_cluster" "cluster2" {
2026-04-16T00:56:27.5713546Z         
2026-04-16T00:56:27.5714524Z         cluster name: test-acc-tf-c-6763662822231787746, API error details:
2026-04-16T00:56:27.5715799Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e0325b1ec945fedc71a577/clusters
2026-04-16T00:56:27.5717101Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-04-16T00:56:27.5718312Z         region is currently out of capacity for the requested instance size. Reason:
2026-04-16T00:56:27.5719252Z         Conflict. Params: [], BadRequestDetail: 
2026-04-16T00:56:27.5719979Z --- FAIL: TestAccFederatedDatabaseInstance_atlasCluster (6.53s)
```

- 2026-04-17 PASS 19 minutes
- 2026-04-18 PASS 26 minutes
- 2026-04-19: MISSING
- 2026-04-20 PASS 17 minutes
- 2026-04-21 PASS 25 minutes
- 2026-04-22 PASS 48 minutes
- 2026-04-23 PASS 34 minutes
- 2026-04-24 PASS 21 minutes
- 2026-04-25 PASS 19 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 23 minutes
- 2026-04-28 PASS 22 minutes
- 2026-04-29 PASS 22 minutes
- 2026-04-30 PASS 26 minutes
- 2026-05-01 PASS 20 minutes
- 2026-05-02 PASS 18 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 22 minutes
- 2026-05-05 PASS 34 minutes
- 2026-05-06 PASS 34 minutes

## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-26 01:20](#error-2026-04-26t0120440000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69ed617bad2ee82a983f0cc3/clusters | qa | out_of_capacity | 1399.01s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 15 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 16 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 16 minutes
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 16 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26

### Error 2026-04-26T01:20:44+00:00
```
2026-04-26T01:20:44.2977049Z === RUN   TestAccFederatedDatabaseInstance_atlasCluster
2026-04-26T01:20:44.2981187Z === CONT  TestAccFederatedDatabaseInstance_atlasCluster
2026-04-26T01:20:44.2984598Z === NAME  TestAccFederatedDatabaseInstance_atlasCluster
2026-04-26T01:20:44.2986069Z     pre_check.go:46: Time before creating cluster: 2026-04-26T00:57:29.673766365Z, ProjectID: 69ed617bad2ee82a983f0cc3, Cluster name: test-acc-tf-c-4839697328456023339
2026-04-26T01:20:44.3029801Z === NAME  TestAccFederatedDatabaseInstance_atlasCluster
2026-04-26T01:20:44.3031007Z     resource_federated_database_instance_test.go:171: Step 1/1 error: Error running apply: exit status 1
2026-04-26T01:20:44.3031764Z         
2026-04-26T01:20:44.3032153Z         Error: Error in create
2026-04-26T01:20:44.3032532Z         
2026-04-26T01:20:44.3033098Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-04-26T01:20:44.3034286Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-04-26T01:20:44.3035378Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-04-26T01:20:44.3035918Z         
2026-04-26T01:20:44.3036802Z         cluster name: test-acc-tf-c-4839697328456023339, API error details:
2026-04-26T01:20:44.3037878Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/69ed617bad2ee82a983f0cc3/clusters
2026-04-26T01:20:44.3038987Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-04-26T01:20:44.3040074Z         region is currently out of capacity for the requested instance size. Reason:
2026-04-26T01:20:44.3041026Z         Conflict. Params: [], BadRequestDetail: 
2026-04-26T01:20:44.3041665Z --- FAIL: TestAccFederatedDatabaseInstance_atlasCluster (1399.05s)
```

- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 20 minutes
- 2026-05-04 PASS 17 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 17 minutes
