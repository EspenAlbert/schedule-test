# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_unpausedToPaused Test Details
# Found 33 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 31) FAIL(x 2)
Success rate: 93.94%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-16 00:52](#error-2026-04-16t0052020000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69e032b21ec945fedc7295a9/clusters | dev | out_of_capacity | 115.10s
[2026-04-30 00:59](#error-2026-04-30t0059340000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 74.01s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS an hour
- 2026-04-08 PASS 21 minutes
- 2026-04-09 PASS 35 minutes
- 2026-04-10 PASS 33 minutes
- 2026-04-11 PASS 18 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS 24 minutes
- 2026-04-14 PASS 22 minutes
- 2026-04-15 PASS 23 minutes
- 2026-04-16

### Error 2026-04-16T00:52:02+00:00
```
2026-04-16T00:52:02.2609396Z === RUN   TestAccClusterAdvancedCluster_unpausedToPaused
2026-04-16T00:54:54.3626935Z === CONT  TestAccClusterAdvancedCluster_unpausedToPaused
2026-04-16T00:55:49.0168971Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2026-04-16T00:55:49.0171114Z     pre_check.go:46: Time before creating cluster: 2026-04-16T00:55:49.016627398Z, ProjectID: 69e032b21ec945fedc7295a9, Cluster name: test-acc-tf-c-8346702631848387144
2026-04-16T00:55:49.7172477Z   
2026-04-16T00:55:49.7173980Z     resource_test.go:195: Step 1/4 error: Error running apply: exit status 1
2026-04-16T00:55:49.7174784Z         
2026-04-16T00:55:49.7175194Z         Error: Error in create
2026-04-16T00:55:49.7175587Z         
2026-04-16T00:55:49.7176023Z           with mongodbatlas_advanced_cluster.test,
2026-04-16T00:55:49.7176841Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-04-16T00:55:49.7177486Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-04-16T00:55:49.7177825Z         
2026-04-16T00:55:49.7178253Z         cluster name: test-acc-tf-c-8346702631848387144, API error details:
2026-04-16T00:55:49.7178956Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e032b21ec945fedc7295a9/clusters
2026-04-16T00:55:49.7179672Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-04-16T00:55:49.7180353Z         region is currently out of capacity for the requested instance size. Reason:
2026-04-16T00:55:49.7180912Z         Conflict. Params: [], BadRequestDetail: 
2026-04-16T00:55:49.7638385Z --- FAIL: TestAccClusterAdvancedCluster_unpausedToPaused (115.98s)
```

- 2026-04-17 PASS 22 minutes
- 2026-04-18 PASS 34 minutes
- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21 PASS 29 minutes
- 2026-04-22 PASS 34 minutes
- 2026-04-23 PASS 38 minutes
- 2026-04-24 PASS 22 minutes
- 2026-04-25 PASS 23 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 23 minutes
- 2026-04-28 PASS 37 minutes
- 2026-04-29 PASS 26 minutes
- 2026-04-30

### Error 2026-04-30T00:59:34+00:00
```
2026-04-30T00:59:34.3253296Z === RUN   TestAccClusterAdvancedCluster_unpausedToPaused
2026-04-30T01:00:48.4055792Z     shared_resource.go:160: 
2026-04-30T01:00:48.4059096Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-30T01:00:48.4065429Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-04-30T01:00:48.4068938Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-04-30T01:00:48.4072380Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-04-30T01:00:48.4077751Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-04-30T01:00:48.4081237Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:190
2026-04-30T01:00:48.4082581Z         	Error:      	Received unexpected error:
2026-04-30T01:00:48.4086024Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:00:48.4087859Z         	Test:       	TestAccClusterAdvancedCluster_unpausedToPaused
2026-04-30T01:00:48.4090953Z         	Messages:   	Project creation failed: test-acc-tf-p-3855225984838178768, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:00:48.4092984Z --- FAIL: TestAccClusterAdvancedCluster_unpausedToPaused (74.08s)
```

- 2026-05-01 PASS 25 minutes
- 2026-05-02 PASS 22 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 24 minutes
- 2026-05-05 PASS 37 minutes
- 2026-05-06 PASS 39 minutes

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08
  - PASS 22 minutes
  - PASS 15 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 23 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 21 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 26 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 24 minutes
- 2026-05-04 PASS 21 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 24 minutes
