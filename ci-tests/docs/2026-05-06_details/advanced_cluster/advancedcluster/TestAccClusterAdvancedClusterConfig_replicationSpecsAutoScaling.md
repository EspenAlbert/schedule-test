# advanced_cluster/advancedcluster/TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling Test Details
# Found 33 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 31) FAIL(x 2)
Success rate: 93.94%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-16 00:53](#error-2026-04-16t0053020000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69e032b21ec945fedc7295a9/clusters | dev | out_of_capacity | 35.08s
[2026-04-18 00:45](#error-2026-04-18t0045060000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 80.00s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 2 hours
- 2026-04-08 PASS 30 minutes
- 2026-04-09 PASS 49 minutes
- 2026-04-10 PASS 55 minutes
- 2026-04-11 PASS 32 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS 39 minutes
- 2026-04-14 PASS 29 minutes
- 2026-04-15 PASS 32 minutes
- 2026-04-16

### Error 2026-04-16T00:53:02+00:00
```
2026-04-16T00:53:02.4658498Z === RUN   TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2026-04-16T00:54:54.2578126Z === CONT  TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2026-04-16T00:55:29.0054456Z === NAME  TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2026-04-16T00:55:29.0056346Z     pre_check.go:46: Time before creating cluster: 2026-04-16T00:55:29.005121581Z, ProjectID: 69e032b21ec945fedc7295a9, Cluster name: test-acc-tf-c-6453921265245671630
2026-04-16T00:55:29.7266698Z    test_name=TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling test_terraform_path=/home/runner/work/_temp/b00f7911-dfb1-455b-abe5-62efc714635b/terraform test_working_directory=/tmp/plugintest2057257128 test_step_number=1
2026-04-16T00:55:29.7268489Z     resource_test.go:402: Step 1/5 error: Error running apply: exit status 1
2026-04-16T00:55:29.7268989Z         
2026-04-16T00:55:29.7269244Z         Error: Error in create
2026-04-16T00:55:29.7269492Z         
2026-04-16T00:55:29.7269823Z           with mongodbatlas_advanced_cluster.test,
2026-04-16T00:55:29.7270726Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-04-16T00:55:29.7271408Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-04-16T00:55:29.7271743Z         
2026-04-16T00:55:29.7272171Z         cluster name: test-acc-tf-c-6453921265245671630, API error details:
2026-04-16T00:55:29.7272882Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e032b21ec945fedc7295a9/clusters
2026-04-16T00:55:29.7273598Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-04-16T00:55:29.7274583Z         region is currently out of capacity for the requested instance size. Reason:
2026-04-16T00:55:29.7275102Z         Conflict. Params: [], BadRequestDetail: 
2026-04-16T00:55:29.7715463Z --- FAIL: TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling (35.78s)
```

- 2026-04-17 PASS 29 minutes
- 2026-04-18

### Error 2026-04-18T00:45:06+00:00
```
2026-04-18T00:45:06.7094556Z === RUN   TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2026-04-18T00:46:26.7271093Z     shared_resource.go:160: 
2026-04-18T00:46:26.7273158Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-18T00:46:26.7277944Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-04-18T00:46:26.7281404Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-04-18T00:46:26.7284924Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-04-18T00:46:26.7288630Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-04-18T00:46:26.7292408Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:391
2026-04-18T00:46:26.7293903Z         	Error:      	Received unexpected error:
2026-04-18T00:46:26.7297565Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-18T00:46:26.7299729Z         	Test:       	TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2026-04-18T00:46:26.7303333Z         	Messages:   	Project creation failed: test-acc-tf-p-9030836490556277147, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-18T00:46:26.7305667Z --- FAIL: TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling (80.02s)
```

- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21 PASS 36 minutes
- 2026-04-22 PASS an hour
- 2026-04-23 PASS 49 minutes
- 2026-04-24 PASS 30 minutes
- 2026-04-25 PASS 29 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 36 minutes
- 2026-04-28 PASS 36 minutes
- 2026-04-29 PASS 34 minutes
- 2026-04-30 PASS 49 minutes
- 2026-05-01 PASS 34 minutes
- 2026-05-02 PASS 28 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 35 minutes
- 2026-05-05 PASS 59 minutes
- 2026-05-06 PASS 56 minutes

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08
  - PASS 28 minutes
  - PASS 30 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 28 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 29 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 33 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 29 minutes
- 2026-05-04 PASS an hour
- 2026-05-05: MISSING
- 2026-05-06 PASS 32 minutes
