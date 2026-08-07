# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_replicaSetAWSProvider Test Details
# Found 35 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 31) FAIL(x 4)
Success rate: 88.57%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:57](#error-2026-07-09t0057530000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.00s
[2026-07-11 00:50](#error-2026-07-11t0050340000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.02s
[2026-07-21 00:53](#error-2026-07-21t0053000000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.05s
[2026-07-23 00:49](#error-2026-07-23t0049320000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.08s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:57:53+00:00
```
2026-07-09T00:57:53.4432711Z === RUN   TestAccClusterAdvancedCluster_replicaSetAWSProvider
2026-07-09T00:57:54.4426297Z     shared_resource.go:160: 
2026-07-09T00:57:54.4427476Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:57:54.4429514Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-09T00:57:54.4431513Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-09T00:57:54.4433487Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-09T00:57:54.4436088Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-09T00:57:54.4438053Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:84
2026-07-09T00:57:54.4439983Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:77
2026-07-09T00:57:54.4440963Z         	Error:      	Received unexpected error:
2026-07-09T00:57:54.4443846Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:57:54.4445513Z         	Test:       	TestAccClusterAdvancedCluster_replicaSetAWSProvider
2026-07-09T00:57:54.4447960Z         	Messages:   	Project creation failed: test-acc-tf-p-4452842142472467181, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:57:54.4450792Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetAWSProvider (1.00s)
```

- 2026-07-10 PASS an hour
- 2026-07-11

### Error 2026-07-11T00:50:34+00:00
```
2026-07-11T00:50:34.3753173Z === RUN   TestAccClusterAdvancedCluster_replicaSetAWSProvider
2026-07-11T00:51:35.5920577Z     shared_resource.go:160: 
2026-07-11T00:51:35.5921638Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:51:35.5923449Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-11T00:51:35.5926577Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-11T00:51:35.5929009Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-11T00:51:35.5930806Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-11T00:51:35.5932663Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:84
2026-07-11T00:51:35.5934859Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:77
2026-07-11T00:51:35.5935673Z         	Error:      	Received unexpected error:
2026-07-11T00:51:35.5937661Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:51:35.5938845Z         	Test:       	TestAccClusterAdvancedCluster_replicaSetAWSProvider
2026-07-11T00:51:35.5940859Z         	Messages:   	Project creation failed: test-acc-tf-p-4468605665078316633, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:51:35.5942084Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetAWSProvider (61.22s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS an hour
- 2026-07-14 PASS an hour
- 2026-07-15 PASS an hour
- 2026-07-16 PASS 2 hours
- 2026-07-17 PASS an hour
- 2026-07-18 PASS an hour
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:00+00:00
```
2026-07-21T00:53:00.7175076Z === RUN   TestAccClusterAdvancedCluster_replicaSetAWSProvider
2026-07-21T00:53:02.1923414Z     shared_resource.go:160: 
2026-07-21T00:53:02.1924465Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:53:02.1926257Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-21T00:53:02.1928006Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-21T00:53:02.1929755Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-21T00:53:02.1932140Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-21T00:53:02.1934809Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:84
2026-07-21T00:53:02.1937061Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:77
2026-07-21T00:53:02.1938006Z         	Error:      	Received unexpected error:
2026-07-21T00:53:02.1941361Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:53:02.1943044Z         	Test:       	TestAccClusterAdvancedCluster_replicaSetAWSProvider
2026-07-21T00:53:02.1945752Z         	Messages:   	Project creation failed: test-acc-tf-p-7891386650411784561, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:53:02.1947289Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetAWSProvider (1.48s)
```

- 2026-07-22 PASS an hour
- 2026-07-23

### Error 2026-07-23T00:49:32+00:00
```
2026-07-23T00:49:32.3974703Z === RUN   TestAccClusterAdvancedCluster_replicaSetAWSProvider
2026-07-23T00:49:33.2095735Z     shared_resource.go:160: 
2026-07-23T00:49:33.2097977Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:49:33.2100594Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-23T00:49:33.2102934Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-23T00:49:33.2104816Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-23T00:49:33.2106675Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-23T00:49:33.2108587Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:84
2026-07-23T00:49:33.2110524Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:77
2026-07-23T00:49:33.2111345Z         	Error:      	Received unexpected error:
2026-07-23T00:49:33.2114387Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:49:33.2115866Z         	Test:       	TestAccClusterAdvancedCluster_replicaSetAWSProvider
2026-07-23T00:49:33.2118269Z         	Messages:   	Project creation failed: test-acc-tf-p-7172343735774649732, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:49:33.2119866Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetAWSProvider (0.81s)
```

- 2026-07-24 PASS 2 hours
- 2026-07-25 PASS an hour
- 2026-07-26: MISSING
- 2026-07-27 PASS 3 hours
- 2026-07-28 PASS 2 hours
- 2026-07-29 PASS an hour
- 2026-07-30 PASS 2 hours
- 2026-07-31
  - PASS an hour
  - PASS an hour
- 2026-08-01 PASS an hour
- 2026-08-02: MISSING
- 2026-08-03 PASS an hour
- 2026-08-04 PASS an hour
- 2026-08-05 PASS an hour
- 2026-08-06 PASS an hour
- 2026-08-07 PASS an hour

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS an hour
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15
  - PASS an hour
  - PASS an hour
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS an hour
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS an hour
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS an hour
  - PASS an hour
- 2026-07-30 PASS an hour
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS an hour
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
