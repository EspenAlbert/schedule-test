# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_singleShardedMultiCloud Test Details
# Found 35 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 29) FAIL(x 6)
Success rate: 82.86%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:57](#error-2026-07-09t0057550000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.09s
[2026-07-10 00:49](#error-2026-07-10t0049520000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6a5041adaf0479f8ffb33972/clusters/test-acc-tf-c-8018028918138018538 | dev | flaky_500 | 5156.05s
[2026-07-11 00:52](#error-2026-07-11t0052520000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.10s
[2026-07-18 00:45](#error-2026-07-18t0045000000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 98.04s
[2026-07-21 00:53](#error-2026-07-21t0053030000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.08s
[2026-07-23 00:49](#error-2026-07-23t0049330000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.05s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:57:55+00:00
```
2026-07-09T00:57:55.0141901Z === RUN   TestAccClusterAdvancedCluster_singleShardedMultiCloud
2026-07-09T00:57:55.8943781Z     shared_resource.go:160: 
2026-07-09T00:57:55.8945940Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:57:55.8948503Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-09T00:57:55.8951417Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-09T00:57:55.8953776Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-09T00:57:55.8956103Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-09T00:57:55.8958206Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:194
2026-07-09T00:57:55.8960336Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:187
2026-07-09T00:57:55.8961209Z         	Error:      	Received unexpected error:
2026-07-09T00:57:55.8964487Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:57:55.8966039Z         	Test:       	TestAccClusterAdvancedCluster_singleShardedMultiCloud
2026-07-09T00:57:55.8968658Z         	Messages:   	Project creation failed: test-acc-tf-p-8753423842866295738, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:57:55.8970308Z --- FAIL: TestAccClusterAdvancedCluster_singleShardedMultiCloud (0.88s)
```

- 2026-07-10

### Error 2026-07-10T00:49:52+00:00
```
2026-07-10T00:49:52.1603278Z === RUN   TestAccClusterAdvancedCluster_singleShardedMultiCloud
2026-07-10T01:03:50.4451863Z === CONT  TestAccClusterAdvancedCluster_singleShardedMultiCloud
2026-07-10T02:29:46.0934010Z === NAME  TestAccClusterAdvancedCluster_singleShardedMultiCloud
2026-07-10T02:29:46.0935338Z     resource_test.go:187: Error running post-test destroy, there may be dangling resources: exit status 1
2026-07-10T02:29:46.0936238Z         
2026-07-10T02:29:46.0936698Z         Error: Error in delete
2026-07-10T02:29:46.0937148Z         
2026-07-10T02:29:46.0937937Z         cluster name: test-acc-tf-c-8018028918138018538, API error details:
2026-07-10T02:29:46.0939825Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a5041adaf0479f8ffb33972/clusters/test-acc-tf-c-8018028918138018538
2026-07-10T02:29:46.0941375Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2026-07-10T02:29:46.0942559Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2026-07-10T02:29:46.0943354Z         BadRequestDetail: 
2026-07-10T02:29:46.0944052Z --- FAIL: TestAccClusterAdvancedCluster_singleShardedMultiCloud (5156.45s)
```

- 2026-07-11

### Error 2026-07-11T00:52:52+00:00
```
2026-07-11T00:52:52.0649435Z === RUN   TestAccClusterAdvancedCluster_singleShardedMultiCloud
2026-07-11T00:53:57.0317353Z     shared_resource.go:160: 
2026-07-11T00:53:57.0318578Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:53:57.0320405Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-11T00:53:57.0322213Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-11T00:53:57.0324217Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-11T00:53:57.0325989Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-11T00:53:57.0327818Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:194
2026-07-11T00:53:57.0329691Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:187
2026-07-11T00:53:57.0330489Z         	Error:      	Received unexpected error:
2026-07-11T00:53:57.0332487Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:53:57.0333749Z         	Test:       	TestAccClusterAdvancedCluster_singleShardedMultiCloud
2026-07-11T00:53:57.0335549Z         	Messages:   	Project creation failed: test-acc-tf-p-8721094665393071622, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:53:57.0336845Z --- FAIL: TestAccClusterAdvancedCluster_singleShardedMultiCloud (64.97s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS an hour
- 2026-07-14 PASS an hour
- 2026-07-15 PASS 47 minutes
- 2026-07-16 PASS 2 hours
- 2026-07-17 PASS 56 minutes
- 2026-07-18

### Error 2026-07-18T00:45:00+00:00
```
2026-07-18T00:45:00.5141675Z === RUN   TestAccClusterAdvancedCluster_singleShardedMultiCloud
2026-07-18T00:46:38.8933487Z     shared_resource.go:160: 
2026-07-18T00:46:38.8935900Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T00:46:38.8942369Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-18T00:46:38.8945236Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-18T00:46:38.8948872Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-18T00:46:38.8951655Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-18T00:46:38.8954115Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:194
2026-07-18T00:46:38.8956200Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:187
2026-07-18T00:46:38.8957038Z         	Error:      	Received unexpected error:
2026-07-18T00:46:38.8959234Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:46:38.8960430Z         	Test:       	TestAccClusterAdvancedCluster_singleShardedMultiCloud
2026-07-18T00:46:38.8962335Z         	Messages:   	Project creation failed: test-acc-tf-p-7381239593500085104, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:46:38.8963618Z --- FAIL: TestAccClusterAdvancedCluster_singleShardedMultiCloud (98.38s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:03+00:00
```
2026-07-21T00:53:03.4329678Z === RUN   TestAccClusterAdvancedCluster_singleShardedMultiCloud
2026-07-21T00:53:04.2558245Z     shared_resource.go:160: 
2026-07-21T00:53:04.2560230Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:53:04.2562050Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-21T00:53:04.2563810Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-21T00:53:04.2565542Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-21T00:53:04.2567313Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-21T00:53:04.2569139Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:194
2026-07-21T00:53:04.2571186Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:187
2026-07-21T00:53:04.2571974Z         	Error:      	Received unexpected error:
2026-07-21T00:53:04.2574747Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:53:04.2576199Z         	Test:       	TestAccClusterAdvancedCluster_singleShardedMultiCloud
2026-07-21T00:53:04.2578530Z         	Messages:   	Project creation failed: test-acc-tf-p-2126105892641182121, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:53:04.2580148Z --- FAIL: TestAccClusterAdvancedCluster_singleShardedMultiCloud (0.82s)
```

- 2026-07-22 PASS an hour
- 2026-07-23

### Error 2026-07-23T00:49:33+00:00
```
2026-07-23T00:49:33.9194713Z === RUN   TestAccClusterAdvancedCluster_singleShardedMultiCloud
2026-07-23T00:49:34.4310663Z     shared_resource.go:160: 
2026-07-23T00:49:34.4313160Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:49:34.4315082Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-23T00:49:34.4316958Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-23T00:49:34.4318794Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-23T00:49:34.4320622Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-23T00:49:34.4322771Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:194
2026-07-23T00:49:34.4324692Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:187
2026-07-23T00:49:34.4325493Z         	Error:      	Received unexpected error:
2026-07-23T00:49:34.4328328Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:49:34.4329827Z         	Test:       	TestAccClusterAdvancedCluster_singleShardedMultiCloud
2026-07-23T00:49:34.4332565Z         	Messages:   	Project creation failed: test-acc-tf-p-1608331107371692262, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:49:34.4334172Z --- FAIL: TestAccClusterAdvancedCluster_singleShardedMultiCloud (0.51s)
```

- 2026-07-24 PASS 2 hours
- 2026-07-25 PASS 50 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS 2 hours
- 2026-07-28 PASS 2 hours
- 2026-07-29 PASS an hour
- 2026-07-30 PASS an hour
- 2026-07-31
  - PASS 39 minutes
  - PASS 39 minutes
- 2026-08-01 PASS 39 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 43 minutes
- 2026-08-04 PASS 40 minutes
- 2026-08-05 PASS 40 minutes
- 2026-08-06 PASS 37 minutes
- 2026-08-07 PASS 40 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 52 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15
  - PASS 48 minutes
  - PASS 40 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 58 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 49 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 40 minutes
  - PASS 47 minutes
- 2026-07-30 PASS 40 minutes
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 39 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
