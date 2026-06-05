# advanced_cluster/advancedcluster/TestAccClusterFlexCluster_basic Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 28) FAIL(x 2)
Success rate: 93.33%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-27 01:02](#error-2026-05-27t0102490000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6a1642a5e9f4601a9902cd43/clusters | dev | flaky_500 | 218.07s
[2026-05-28 01:02](#error-2026-05-28t0102480000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.02s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS a minute
- 2026-05-08 PASS a minute
- 2026-05-09 PASS 3 minutes
- 2026-05-10: MISSING
- 2026-05-11 PASS a minute
- 2026-05-12 PASS a minute
- 2026-05-13 PASS a minute
- 2026-05-14 PASS 4 minutes
- 2026-05-15 PASS a minute
- 2026-05-16 PASS a minute
- 2026-05-17: MISSING
- 2026-05-18 PASS a minute
- 2026-05-19 PASS a minute
- 2026-05-20 PASS a minute
- 2026-05-21 PASS 4 minutes
- 2026-05-22 PASS a minute
- 2026-05-23 PASS a minute
- 2026-05-24: MISSING
- 2026-05-25 PASS a minute
- 2026-05-26 PASS a minute
- 2026-05-27

### Error 2026-05-27T01:02:49+00:00
```
2026-05-27T01:02:49.4403861Z === RUN   TestAccClusterFlexCluster_basic
2026-05-27T01:02:54.1377946Z    test_working_directory=/tmp/plugintest3481371416 test_step_number=1
2026-05-27T01:02:54.1378944Z     resource_test.go:2920: Step 1/4 error: Error running apply: exit status 1
2026-05-27T01:02:54.1379842Z         
2026-05-27T01:02:54.1380539Z         Error: error reading advanced cluster list
2026-05-27T01:02:54.1381034Z         
2026-05-27T01:02:54.1381579Z           with data.mongodbatlas_advanced_clusters.test,
2026-05-27T01:02:54.1382396Z           on terraform_plugin_test.tf line 37, in data "mongodbatlas_advanced_clusters" "test":
2026-05-27T01:02:54.1383130Z           37: 	data "mongodbatlas_advanced_clusters" "test" {
2026-05-27T01:02:54.1383459Z         
2026-05-27T01:02:54.1383902Z         project ID 6a1642a5e9f4601a9902cd43. Error
2026-05-27T01:02:54.1384695Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a1642a5e9f4601a9902cd43/clusters
2026-05-27T01:02:54.1385511Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-05-27T01:02:54.1386194Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-05-27T01:02:54.1386651Z         BadRequestDetail: 
2026-05-27T01:06:28.1356478Z --- FAIL: TestAccClusterFlexCluster_basic (218.70s)
```

- 2026-05-28

### Error 2026-05-28T01:02:48+00:00
```
2026-05-28T01:02:48.2969006Z === RUN   TestAccClusterFlexCluster_basic
2026-05-28T01:02:48.2969908Z     resource_test.go:2916: Creating execution project (1): test-acc-tf-p-8459611639960220761
2026-05-28T01:02:48.4593739Z     resource_test.go:2916: 
2026-05-28T01:02:48.4595595Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:02:48.4598669Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T01:02:48.4600605Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T01:02:48.4602510Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:2916
2026-05-28T01:02:48.4603347Z         	Error:      	Received unexpected error:
2026-05-28T01:02:48.4606199Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:02:48.4607686Z         	Test:       	TestAccClusterFlexCluster_basic
2026-05-28T01:02:48.4610432Z         	Messages:   	Project creation failed: test-acc-tf-p-8459611639960220761, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:02:48.4611915Z --- FAIL: TestAccClusterFlexCluster_basic (0.16s)
```

- 2026-05-29 PASS a minute
- 2026-05-30 PASS a minute
- 2026-05-31: MISSING
- 2026-06-01 PASS a minute
- 2026-06-02 PASS a minute
- 2026-06-03 PASS a minute
- 2026-06-04 PASS 3 minutes
- 2026-06-05 PASS a minute

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 2 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 3 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 3 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 2 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
