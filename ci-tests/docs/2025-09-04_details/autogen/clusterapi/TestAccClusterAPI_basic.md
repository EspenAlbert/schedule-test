# autogen/clusterapi/TestAccClusterAPI_basic Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 36) FAIL(x 2)
Success rate: 94.74%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-08-18 00:58](#error-2025-08-18t0058120000) |  | dev | 1434.05s
[2025-09-01 00:32](#error-2025-09-01t0032130000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.01s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 33 minutes
- 2025-08-07 PASS 34 minutes
- 2025-08-08 PASS 28 minutes
- 2025-08-09 PASS 33 minutes
- 2025-08-10 PASS 40 minutes
- 2025-08-11 PASS an hour
- 2025-08-12 PASS 31 minutes
- 2025-08-13 PASS 31 minutes
- 2025-08-14 PASS 33 minutes
- 2025-08-15 PASS 23 minutes
- 2025-08-16 PASS 57 minutes
- 2025-08-17 PASS 45 minutes
- 2025-08-18

### Error 2025-08-18T00:58:12+00:00
```
2025-08-18T00:58:12.5947774Z === RUN   TestAccClusterAPI_basic
2025-08-18T00:58:12.5948578Z     resource_test.go:17: Creating execution project: test-acc-tf-p-3829322229709164039
2025-08-18T00:58:12.5949793Z === CONT  TestAccClusterAPI_basic
2025-08-18T00:58:12.5960674Z   
2025-08-18T00:58:12.5961322Z     resource_test.go:21: Step 1/4 error: Error running apply: exit status 1
2025-08-18T00:58:12.5961705Z         
2025-08-18T00:58:12.5962018Z         Error: Error waiting for changes in Create
2025-08-18T00:58:12.5962298Z         
2025-08-18T00:58:12.5962605Z           with mongodbatlas_cluster_api.test,
2025-08-18T00:58:12.5963206Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster_api" "test":
2025-08-18T00:58:12.5963759Z           12: 		resource "mongodbatlas_cluster_api" "test" {
2025-08-18T00:58:12.5964047Z         
2025-08-18T00:58:12.5964638Z         unexpected state 'DELETED', wanted target 'IDLE'. last error: %!s(<nil>)
2025-08-18T00:58:12.5965058Z --- FAIL: TestAccClusterAPI_basic (1434.53s)
```

- 2025-08-19 PASS 33 minutes
- 2025-08-20
  - PASS 32 minutes
  - PASS 30 minutes
- 2025-08-21 PASS 29 minutes
- 2025-08-22 PASS 25 minutes
- 2025-08-23 PASS 35 minutes
- 2025-08-24 PASS 21 minutes
- 2025-08-25 PASS 32 minutes
- 2025-08-26 PASS 35 minutes
- 2025-08-27 PASS 36 minutes
- 2025-08-28 PASS 32 minutes
- 2025-08-29 PASS 41 minutes
- 2025-08-30 PASS 35 minutes
- 2025-08-31 PASS 34 minutes
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:32:13+00:00
```
2025-09-01T00:32:13.2751662Z === RUN   TestAccClusterAPI_basic
2025-09-01T00:32:13.2753994Z     resource_test.go:17: Creating execution project: test-acc-tf-p-7422561659780241019
2025-09-01T00:32:13.2754796Z     resource_test.go:17: 
2025-09-01T00:32:13.2756715Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:32:13.2759890Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:77
2025-09-01T00:32:13.2763342Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/clusterapi/resource_test.go:17
2025-09-01T00:32:13.2764652Z         	Error:      	Received unexpected error:
2025-09-01T00:32:13.2769585Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:32:13.2772023Z         	Test:       	TestAccClusterAPI_basic
2025-09-01T00:32:13.2775993Z         	Messages:   	Project creation failed: test-acc-tf-p-7422561659780241019, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:32:13.2778567Z --- FAIL: TestAccClusterAPI_basic (0.09s)
```

  - PASS an hour
  - PASS an hour
  - PASS 34 minutes
  - PASS 26 minutes
  - PASS 30 minutes
  - PASS 28 minutes
  - PASS 28 minutes
- 2025-09-02 PASS 34 minutes
- 2025-09-03 PASS 40 minutes
- 2025-09-04 PASS 35 minutes