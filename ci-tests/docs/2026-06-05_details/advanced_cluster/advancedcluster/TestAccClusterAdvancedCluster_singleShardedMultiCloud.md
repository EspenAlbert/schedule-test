# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_singleShardedMultiCloud Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 25) FAIL(x 5)
Success rate: 83.33%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 00:58](#error-2026-05-09t0058310000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.09s
[2026-05-18 01:00](#error-2026-05-18t0100370000) |  | dev |  | 1216.05s
[2026-05-26 02:09](#error-2026-05-26t0209250000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 85.05s
[2026-05-28 01:01](#error-2026-05-28t0101260000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | flaky_500 | 1.03s
[2026-06-05 01:05](#error-2026-06-05t0105550000) | OUT_OF_CAPACITY /api/atlas/v2/groups/6a2220f042e1e504cd7b895b/clusters | dev | out_of_capacity | 6.09s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS an hour
- 2026-05-08 PASS an hour
- 2026-05-09

### Error 2026-05-09T00:58:31+00:00
```
2026-05-09T00:58:31.9768171Z === RUN   TestAccClusterAdvancedCluster_singleShardedMultiCloud
2026-05-09T00:59:36.8479025Z     shared_resource.go:160: 
2026-05-09T00:59:36.8480999Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T00:59:36.8482812Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-05-09T00:59:36.8484746Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-05-09T00:59:36.8486461Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-05-09T00:59:36.8488160Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-05-09T00:59:36.8489941Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:191
2026-05-09T00:59:36.8491957Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:184
2026-05-09T00:59:36.8493166Z         	Error:      	Received unexpected error:
2026-05-09T00:59:36.8495182Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T00:59:36.8496313Z         	Test:       	TestAccClusterAdvancedCluster_singleShardedMultiCloud
2026-05-09T00:59:36.8498075Z         	Messages:   	Project creation failed: test-acc-tf-p-5403429342535221384, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T00:59:36.8499229Z --- FAIL: TestAccClusterAdvancedCluster_singleShardedMultiCloud (64.87s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 52 minutes
- 2026-05-12 PASS 48 minutes
- 2026-05-13 PASS an hour
- 2026-05-14 PASS an hour
- 2026-05-15 PASS 44 minutes
- 2026-05-16 PASS 40 minutes
- 2026-05-17: MISSING
- 2026-05-18

### Error 2026-05-18T01:00:37+00:00
```
2026-05-18T01:00:37.1217398Z === RUN   TestAccClusterAdvancedCluster_singleShardedMultiCloud
2026-05-18T01:02:21.4524352Z === CONT  TestAccClusterAdvancedCluster_singleShardedMultiCloud
2026-05-18T01:22:37.8852314Z === NAME  TestAccClusterAdvancedCluster_singleShardedMultiCloud
2026-05-18T01:22:37.8853216Z     resource_test.go:184: Step 1/3 error: Error running apply: exit status 1
2026-05-18T01:22:37.8853731Z         
2026-05-18T01:22:37.8854017Z         Error: Error in create
2026-05-18T01:22:37.8854289Z         
2026-05-18T01:22:37.8854683Z           with mongodbatlas_advanced_cluster.test,
2026-05-18T01:22:37.8855381Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-05-18T01:22:37.8856185Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-05-18T01:22:37.8856519Z         
2026-05-18T01:22:37.8856993Z         cluster=test-acc-tf-c-3267745304778306915 didn't reach desired state: IDLE,
2026-05-18T01:22:37.8857623Z         error:
2026-05-18T01:22:37.8858356Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a0a64b3dece59bebe11076b/clusters/test-acc-tf-c-3267745304778306915
2026-05-18T01:22:37.8859162Z         GET: HTTP 403 Forbidden (Error code: "") Detail:  Reason: . Params: [],
2026-05-18T01:22:37.8859602Z         BadRequestDetail: 
2026-05-18T01:22:37.9363125Z --- FAIL: TestAccClusterAdvancedCluster_singleShardedMultiCloud (1216.49s)
```

- 2026-05-19 PASS 39 minutes
- 2026-05-20 PASS 52 minutes
- 2026-05-21 PASS an hour
- 2026-05-22 PASS an hour
- 2026-05-23 PASS 53 minutes
- 2026-05-24: MISSING
- 2026-05-25 PASS 52 minutes
- 2026-05-26

### Error 2026-05-26T02:09:25+00:00
```
2026-05-26T02:09:25.3012557Z === RUN   TestAccClusterAdvancedCluster_singleShardedMultiCloud
2026-05-26T02:10:50.8389926Z     shared_resource.go:160: 
2026-05-26T02:10:50.8391170Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-26T02:10:50.8395250Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-05-26T02:10:50.8397207Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-05-26T02:10:50.8398813Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-05-26T02:10:50.8400170Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-05-26T02:10:50.8401595Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:191
2026-05-26T02:10:50.8403027Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:184
2026-05-26T02:10:50.8403630Z         	Error:      	Received unexpected error:
2026-05-26T02:10:50.8405108Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:10:50.8406336Z         	Test:       	TestAccClusterAdvancedCluster_singleShardedMultiCloud
2026-05-26T02:10:50.8407725Z         	Messages:   	Project creation failed: test-acc-tf-p-1051108710783249946, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:10:50.8408875Z --- FAIL: TestAccClusterAdvancedCluster_singleShardedMultiCloud (85.54s)
```

- 2026-05-27 PASS an hour
- 2026-05-28

### Error 2026-05-28T01:01:26+00:00
```
2026-05-28T01:01:26.4729614Z === RUN   TestAccClusterAdvancedCluster_singleShardedMultiCloud
2026-05-28T01:01:27.8120050Z     shared_resource.go:160: 
2026-05-28T01:01:27.8121402Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:01:27.8123266Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-05-28T01:01:27.8125119Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-05-28T01:01:27.8126916Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-05-28T01:01:27.8128963Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-05-28T01:01:27.8130875Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:192
2026-05-28T01:01:27.8132790Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:185
2026-05-28T01:01:27.8133637Z         	Error:      	Received unexpected error:
2026-05-28T01:01:27.8136500Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:01:27.8138072Z         	Test:       	TestAccClusterAdvancedCluster_singleShardedMultiCloud
2026-05-28T01:01:27.8140437Z         	Messages:   	Project creation failed: test-acc-tf-p-2658996109069247746, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:01:27.8142024Z --- FAIL: TestAccClusterAdvancedCluster_singleShardedMultiCloud (1.34s)
```

- 2026-05-29 PASS 54 minutes
- 2026-05-30 PASS 39 minutes
- 2026-05-31: MISSING
- 2026-06-01 PASS an hour
- 2026-06-02 PASS 39 minutes
- 2026-06-03 PASS an hour
- 2026-06-04 PASS an hour
- 2026-06-05

### Error 2026-06-05T01:05:55+00:00
```
2026-06-05T01:05:55.1633449Z === RUN   TestAccClusterAdvancedCluster_singleShardedMultiCloud
2026-06-05T01:07:23.4867385Z === CONT  TestAccClusterAdvancedCluster_singleShardedMultiCloud
2026-06-05T01:07:30.1089828Z === NAME  TestAccClusterAdvancedCluster_singleShardedMultiCloud
2026-06-05T01:07:30.1090448Z     resource_test.go:185: Step 1/3 error: Error running apply: exit status 1
2026-06-05T01:07:30.1090861Z         
2026-06-05T01:07:30.1091137Z         Error: Error in create
2026-06-05T01:07:30.1091406Z         
2026-06-05T01:07:30.1092077Z           with mongodbatlas_advanced_cluster.test,
2026-06-05T01:07:30.1092901Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-06-05T01:07:30.1093594Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-06-05T01:07:30.1093941Z         
2026-06-05T01:07:30.1094390Z         cluster name: test-acc-tf-c-3997145149784713316, API error details:
2026-06-05T01:07:30.1095380Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a2220f042e1e504cd7b895b/clusters
2026-06-05T01:07:30.1096116Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-06-05T01:07:30.1096808Z         region is currently out of capacity for the requested instance size. Reason:
2026-06-05T01:07:30.1097344Z         Conflict. Params: [], BadRequestDetail: 
2026-06-05T01:07:30.1248263Z   
2026-06-05T01:07:30.2085645Z --- FAIL: TestAccClusterAdvancedCluster_singleShardedMultiCloud (6.95s)
```


## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 46 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 46 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 44 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 46 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
