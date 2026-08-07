# advanced_cluster/advancedcluster/TestAccAdvancedCluster_effectiveAnalyticsAutoScaling Test Details
# Found 35 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 29) FAIL(x 6)
Success rate: 82.86%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:57](#error-2026-07-09t0057470000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.02s
[2026-07-11 00:43](#error-2026-07-11t0043190000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.07s
[2026-07-18 00:42](#error-2026-07-18t0042580000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 69.00s
[2026-07-21 00:52](#error-2026-07-21t0052560000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.09s
[2026-07-23 00:49](#error-2026-07-23t0049280000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | flaky_500 | 0.06s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:57:47+00:00
```
2026-07-09T00:57:47.3679993Z === RUN   TestAccAdvancedCluster_effectiveAnalyticsAutoScaling
2026-07-09T00:57:48.5820468Z     shared_resource.go:160: 
2026-07-09T00:57:48.5822622Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:57:48.5825922Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-09T00:57:48.5827968Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-09T00:57:48.5829978Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-09T00:57:48.5831972Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-09T00:57:48.5834127Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:356
2026-07-09T00:57:48.5836538Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:261
2026-07-09T00:57:48.5837387Z         	Error:      	Received unexpected error:
2026-07-09T00:57:48.5840258Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:57:48.5841807Z         	Test:       	TestAccAdvancedCluster_effectiveAnalyticsAutoScaling
2026-07-09T00:57:48.5844344Z         	Messages:   	Project creation failed: test-acc-tf-p-8491150234312175968, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:57:48.5845993Z --- FAIL: TestAccAdvancedCluster_effectiveAnalyticsAutoScaling (1.22s)
```

- 2026-07-10 PASS 52 minutes
- 2026-07-11

### Error 2026-07-11T00:43:19+00:00
```
2026-07-11T00:43:19.2887023Z === RUN   TestAccAdvancedCluster_effectiveAnalyticsAutoScaling
2026-07-11T00:44:21.0081326Z     shared_resource.go:160: 
2026-07-11T00:44:21.0083088Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:44:21.0085641Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-11T00:44:21.0087517Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-11T00:44:21.0089311Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-11T00:44:21.0091086Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-11T00:44:21.0093007Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:356
2026-07-11T00:44:21.0095273Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:261
2026-07-11T00:44:21.0096166Z         	Error:      	Received unexpected error:
2026-07-11T00:44:21.0098317Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:44:21.0099873Z         	Test:       	TestAccAdvancedCluster_effectiveAnalyticsAutoScaling
2026-07-11T00:44:21.0101700Z         	Messages:   	Project creation failed: test-acc-tf-p-3424942847903631544, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:44:21.0102929Z --- FAIL: TestAccAdvancedCluster_effectiveAnalyticsAutoScaling (61.72s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 41 minutes
- 2026-07-14 PASS 35 minutes
- 2026-07-15 PASS 35 minutes
- 2026-07-16 PASS an hour
- 2026-07-17 PASS 38 minutes
- 2026-07-18

### Error 2026-07-18T00:42:58+00:00
```
2026-07-18T00:42:58.7116980Z === RUN   TestAccAdvancedCluster_effectiveAnalyticsAutoScaling
2026-07-18T00:44:07.7507707Z     shared_resource.go:160: 
2026-07-18T00:44:07.7510622Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T00:44:07.7514039Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-18T00:44:07.7516867Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-18T00:44:07.7519888Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-18T00:44:07.7523204Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-18T00:44:07.7527940Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:356
2026-07-18T00:44:07.7532892Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:261
2026-07-18T00:44:07.7533807Z         	Error:      	Received unexpected error:
2026-07-18T00:44:07.7535856Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:44:07.7537049Z         	Test:       	TestAccAdvancedCluster_effectiveAnalyticsAutoScaling
2026-07-18T00:44:07.7539235Z         	Messages:   	Project creation failed: test-acc-tf-p-3254537510764047562, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:44:07.7540848Z --- FAIL: TestAccAdvancedCluster_effectiveAnalyticsAutoScaling (69.04s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:52:56+00:00
```
2026-07-21T00:52:56.3443239Z === RUN   TestAccAdvancedCluster_effectiveAnalyticsAutoScaling
2026-07-21T00:52:57.2271374Z     shared_resource.go:160: 
2026-07-21T00:52:57.2272554Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:52:57.2274412Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-21T00:52:57.2276272Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-21T00:52:57.2278490Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-21T00:52:57.2281023Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-21T00:52:57.2283255Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:356
2026-07-21T00:52:57.2285218Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:261
2026-07-21T00:52:57.2286032Z         	Error:      	Received unexpected error:
2026-07-21T00:52:57.2289294Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:52:57.2290908Z         	Test:       	TestAccAdvancedCluster_effectiveAnalyticsAutoScaling
2026-07-21T00:52:57.2293282Z         	Messages:   	Project creation failed: test-acc-tf-p-2114457786034009190, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:52:57.2294790Z --- FAIL: TestAccAdvancedCluster_effectiveAnalyticsAutoScaling (0.88s)
```

- 2026-07-22 PASS an hour
- 2026-07-23

### Error 2026-07-23T00:49:28+00:00
```
2026-07-23T00:49:28.4463058Z === RUN   TestAccAdvancedCluster_effectiveAnalyticsAutoScaling
2026-07-23T00:49:29.0493260Z     shared_resource.go:160: 
2026-07-23T00:49:29.0495190Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:49:29.0497674Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-23T00:49:29.0500098Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-23T00:49:29.0502797Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-23T00:49:29.0504589Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-23T00:49:29.0506530Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:356
2026-07-23T00:49:29.0508554Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:261
2026-07-23T00:49:29.0509388Z         	Error:      	Received unexpected error:
2026-07-23T00:49:29.0512421Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:49:29.0513944Z         	Test:       	TestAccAdvancedCluster_effectiveAnalyticsAutoScaling
2026-07-23T00:49:29.0516495Z         	Messages:   	Project creation failed: test-acc-tf-p-6816213988498341125, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:49:29.0518128Z --- FAIL: TestAccAdvancedCluster_effectiveAnalyticsAutoScaling (0.61s)
```

- 2026-07-24 PASS an hour
- 2026-07-25 PASS 39 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS an hour
- 2026-07-28 PASS an hour
- 2026-07-29 PASS 38 minutes
- 2026-07-30 PASS an hour
- 2026-07-31
  - PASS 31 minutes
  - PASS 24 minutes
- 2026-08-01 PASS 28 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 27 minutes
- 2026-08-04 PASS 29 minutes
- 2026-08-05 PASS 27 minutes
- 2026-08-06 PASS 30 minutes
- 2026-08-07 PASS 30 minutes

## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-30 07:59](#error-2026-07-30t0759120000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6a6b04524ef023d775afc807/clusters/test-acc-tf-c-3002742630489164487 | qa | flaky_500 | 1396.04s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 37 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15
  - PASS 32 minutes
  - PASS 28 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 40 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 33 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 31 minutes
  - PASS 30 minutes
- 2026-07-30

### Error 2026-07-30T07:59:12+00:00
```
2026-07-30T07:59:12.2043247Z === RUN   TestAccAdvancedCluster_effectiveAnalyticsAutoScaling
2026-07-30T08:01:00.2263815Z === CONT  TestAccAdvancedCluster_effectiveAnalyticsAutoScaling
2026-07-30T08:19:58.7480193Z === NAME  TestAccAdvancedCluster_effectiveAnalyticsAutoScaling
2026-07-30T08:19:58.7480833Z     effective_fields_test.go:264: Step 2/2 error: Error running apply: exit status 1
2026-07-30T08:19:58.7481270Z         
2026-07-30T08:19:58.7481538Z         Error: Error in update
2026-07-30T08:19:58.7481800Z         
2026-07-30T08:19:58.7482148Z           with mongodbatlas_advanced_cluster.test,
2026-07-30T08:19:58.7482840Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-07-30T08:19:58.7483823Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-07-30T08:19:58.7484171Z         
2026-07-30T08:19:58.7484657Z         cluster=test-acc-tf-c-3002742630489164487 didn't reach desired state: IDLE,
2026-07-30T08:19:58.7485090Z         error:
2026-07-30T08:19:58.7485824Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6a6b04524ef023d775afc807/clusters/test-acc-tf-c-3002742630489164487
2026-07-30T08:19:58.7486650Z         GET: HTTP 401 Unauthorized (Error code: "UNEXPECTED_ERROR") Detail: You are
2026-07-30T08:19:58.7487307Z         not authorized for this resource. Reason: Unauthorized. Params: [],
2026-07-30T08:19:58.7487788Z         BadRequestDetail: 
2026-07-30T08:19:58.8336239Z    test_name=TestAccClusterAdvancedCluster_biConnectorConfig
2026-07-30T08:24:11.5446541Z --- FAIL: TestAccAdvancedCluster_effectiveAnalyticsAutoScaling (1396.44s)
```

- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 27 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
