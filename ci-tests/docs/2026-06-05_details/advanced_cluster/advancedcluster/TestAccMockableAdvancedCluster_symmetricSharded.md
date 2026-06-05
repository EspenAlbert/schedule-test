# advanced_cluster/advancedcluster/TestAccMockableAdvancedCluster_symmetricSharded Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 28) FAIL(x 2)
Success rate: 93.33%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-28 01:02](#error-2026-05-28t0102440000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.04s
[2026-06-05 01:05](#error-2026-06-05t0105570000) | OUT_OF_CAPACITY /api/atlas/v2/groups/6a2220f542e1e504cd7b94f5/clusters | dev | out_of_capacity | 9.06s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS an hour
- 2026-05-08 PASS an hour
- 2026-05-09 PASS an hour
- 2026-05-10: MISSING
- 2026-05-11 PASS an hour
- 2026-05-12 PASS an hour
- 2026-05-13 PASS an hour
- 2026-05-14 PASS an hour
- 2026-05-15 PASS an hour
- 2026-05-16 PASS an hour
- 2026-05-17: MISSING
- 2026-05-18 PASS an hour
- 2026-05-19 PASS an hour
- 2026-05-20 PASS an hour
- 2026-05-21 PASS an hour
- 2026-05-22 PASS 2 hours
- 2026-05-23 PASS an hour
- 2026-05-24: MISSING
- 2026-05-25 PASS an hour
- 2026-05-26 PASS an hour
- 2026-05-27 PASS 2 hours
- 2026-05-28

### Error 2026-05-28T01:02:44+00:00
```
2026-05-28T01:02:44.8661666Z === RUN   TestAccMockableAdvancedCluster_symmetricSharded
2026-05-28T01:02:45.2911175Z     shared_resource.go:160: 
2026-05-28T01:02:45.2913218Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:02:45.2916588Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-05-28T01:02:45.2918811Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-05-28T01:02:45.2920797Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-05-28T01:02:45.2922746Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-05-28T01:02:45.2924798Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:652
2026-05-28T01:02:45.2925770Z         	Error:      	Received unexpected error:
2026-05-28T01:02:45.2930210Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:02:45.2931795Z         	Test:       	TestAccMockableAdvancedCluster_symmetricSharded
2026-05-28T01:02:45.2934220Z         	Messages:   	Project creation failed: test-acc-tf-p-8047367320173403894, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:02:45.2935808Z --- FAIL: TestAccMockableAdvancedCluster_symmetricSharded (0.43s)
```

- 2026-05-29 PASS an hour
- 2026-05-30 PASS an hour
- 2026-05-31: MISSING
- 2026-06-01 PASS an hour
- 2026-06-02 PASS an hour
- 2026-06-03 PASS an hour
- 2026-06-04 PASS an hour
- 2026-06-05

### Error 2026-06-05T01:05:57+00:00
```
2026-06-05T01:05:57.6026499Z === RUN   TestAccMockableAdvancedCluster_symmetricSharded
2026-06-05T01:06:00.2874309Z     resource_test.go:655: Adding variable groupId=6a2220f542e1e504cd7b94f5
2026-06-05T01:06:00.2875604Z     resource_test.go:655: Adding variable clusterName=test-acc-tf-c-4061231231658422702
2026-06-05T01:07:24.1361173Z === CONT  TestAccMockableAdvancedCluster_symmetricSharded
2026-06-05T01:07:30.1248554Z === NAME  TestAccMockableAdvancedCluster_symmetricSharded
2026-06-05T01:07:30.1249156Z     resource_test.go:655: Step 1/3 error: Error running apply: exit status 1
2026-06-05T01:07:30.1249566Z         
2026-06-05T01:07:30.1249840Z         Error: Error in create
2026-06-05T01:07:30.1250109Z         
2026-06-05T01:07:30.1250453Z           with mongodbatlas_advanced_cluster.test,
2026-06-05T01:07:30.1251149Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-06-05T01:07:30.1252542Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-06-05T01:07:30.1253213Z         
2026-06-05T01:07:30.1254015Z         cluster name: test-acc-tf-c-4061231231658422702, API error details:
2026-06-05T01:07:30.1255304Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a2220f542e1e504cd7b94f5/clusters
2026-06-05T01:07:30.1257034Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-06-05T01:07:30.1258353Z         region is currently out of capacity for the requested instance size. Reason:
2026-06-05T01:07:30.1259330Z         Conflict. Params: [], BadRequestDetail: 
2026-06-05T01:07:30.1819028Z   
2026-06-05T01:07:30.2427444Z --- FAIL: TestAccMockableAdvancedCluster_symmetricSharded (9.64s)
```


## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS an hour
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS an hour
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS an hour
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS an hour
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
