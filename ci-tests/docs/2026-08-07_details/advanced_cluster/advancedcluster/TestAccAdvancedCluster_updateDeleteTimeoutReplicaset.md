# advanced_cluster/advancedcluster/TestAccAdvancedCluster_updateDeleteTimeoutReplicaset Test Details
# Found 35 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 31) FAIL(x 4)
Success rate: 88.57%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-07-09 00:58](#error-2026-07-09t0058170000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.10s
[2026-07-11 00:56](#error-2026-07-11t0056420000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.02s
[2026-07-21 00:53](#error-2026-07-21t0053180000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.05s
[2026-07-23 00:49](#error-2026-07-23t0049450000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.07s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:58:17+00:00
```
2026-07-09T00:58:17.5323317Z === RUN   TestAccAdvancedCluster_updateDeleteTimeoutReplicaset
2026-07-09T00:58:18.5177903Z     shared_resource.go:160: 
2026-07-09T00:58:18.5179203Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:58:18.5181077Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-09T00:58:18.5182912Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-09T00:58:18.5185235Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-09T00:58:18.5187095Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-09T00:58:18.5189029Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:2965
2026-07-09T00:58:18.5189839Z         	Error:      	Received unexpected error:
2026-07-09T00:58:18.5192710Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:58:18.5194222Z         	Test:       	TestAccAdvancedCluster_updateDeleteTimeoutReplicaset
2026-07-09T00:58:18.5196907Z         	Messages:   	Project creation failed: test-acc-tf-p-1476280987350861046, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:58:18.5198535Z --- FAIL: TestAccAdvancedCluster_updateDeleteTimeoutReplicaset (0.99s)
```

- 2026-07-10 PASS 38 minutes
- 2026-07-11

### Error 2026-07-11T00:56:42+00:00
```
2026-07-11T00:56:42.6825930Z === RUN   TestAccAdvancedCluster_updateDeleteTimeoutReplicaset
2026-07-11T00:56:42.9054088Z     shared_resource.go:160: 
2026-07-11T00:56:42.9055312Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:56:42.9057150Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-11T00:56:42.9058927Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-11T00:56:42.9060710Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-11T00:56:42.9062445Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-11T00:56:42.9064545Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:2965
2026-07-11T00:56:42.9065358Z         	Error:      	Received unexpected error:
2026-07-11T00:56:42.9068179Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-11T00:56:42.9070135Z         	Test:       	TestAccAdvancedCluster_updateDeleteTimeoutReplicaset
2026-07-11T00:56:42.9072477Z         	Messages:   	Project creation failed: test-acc-tf-p-368527321675636563, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-11T00:56:42.9074718Z --- FAIL: TestAccAdvancedCluster_updateDeleteTimeoutReplicaset (0.22s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 28 minutes
- 2026-07-14 PASS 29 minutes
- 2026-07-15 PASS 19 minutes
- 2026-07-16 PASS an hour
- 2026-07-17 PASS 29 minutes
- 2026-07-18 PASS 27 minutes
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:18+00:00
```
2026-07-21T00:53:18.3110646Z === RUN   TestAccAdvancedCluster_updateDeleteTimeoutReplicaset
2026-07-21T00:53:18.7731576Z     shared_resource.go:160: 
2026-07-21T00:53:18.7733114Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:53:18.7734918Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-21T00:53:18.7736693Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-21T00:53:18.7738416Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-21T00:53:18.7740342Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-21T00:53:18.7742195Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:2965
2026-07-21T00:53:18.7742989Z         	Error:      	Received unexpected error:
2026-07-21T00:53:18.7745765Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:53:18.7747557Z         	Test:       	TestAccAdvancedCluster_updateDeleteTimeoutReplicaset
2026-07-21T00:53:18.7749887Z         	Messages:   	Project creation failed: test-acc-tf-p-5909739892725315274, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:53:18.7752091Z --- FAIL: TestAccAdvancedCluster_updateDeleteTimeoutReplicaset (0.46s)
```

- 2026-07-22 PASS 28 minutes
- 2026-07-23

### Error 2026-07-23T00:49:45+00:00
```
2026-07-23T00:49:45.0575653Z === RUN   TestAccAdvancedCluster_updateDeleteTimeoutReplicaset
2026-07-23T00:49:45.8019646Z     shared_resource.go:160: 
2026-07-23T00:49:45.8021269Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:49:45.8023546Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-23T00:49:45.8025538Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-23T00:49:45.8027600Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-23T00:49:45.8029391Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-23T00:49:45.8031284Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:2965
2026-07-23T00:49:45.8032410Z         	Error:      	Received unexpected error:
2026-07-23T00:49:45.8035253Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:49:45.8036741Z         	Test:       	TestAccAdvancedCluster_updateDeleteTimeoutReplicaset
2026-07-23T00:49:45.8039136Z         	Messages:   	Project creation failed: test-acc-tf-p-2412757815535727546, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:49:45.8040727Z --- FAIL: TestAccAdvancedCluster_updateDeleteTimeoutReplicaset (0.75s)
```

- 2026-07-24 PASS 29 minutes
- 2026-07-25 PASS 20 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS an hour
- 2026-07-28 PASS an hour
- 2026-07-29 PASS 21 minutes
- 2026-07-30 PASS 57 minutes
- 2026-07-31
  - PASS 15 minutes
  - PASS 14 minutes
- 2026-08-01 PASS 16 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 15 minutes
- 2026-08-04 PASS 16 minutes
- 2026-08-05 PASS 17 minutes
- 2026-08-06 PASS 16 minutes
- 2026-08-07 PASS 20 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 31 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15
  - PASS 28 minutes
  - PASS 28 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 28 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 18 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 16 minutes
  - PASS 15 minutes
- 2026-07-30 PASS 14 minutes
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 15 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
