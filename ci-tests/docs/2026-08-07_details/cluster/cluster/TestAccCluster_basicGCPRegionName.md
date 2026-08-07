# cluster/cluster/TestAccCluster_basicGCPRegionName Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 28) FAIL(x 4)
Success rate: 87.50%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:50](#error-2026-07-09t0050080000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 91.03s
[2026-07-14 00:43](#error-2026-07-14t0043040000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.01s
[2026-07-21 00:52](#error-2026-07-21t0052290000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.09s
[2026-07-23 00:48](#error-2026-07-23t0048220000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.09s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:50:08+00:00
```
2026-07-09T00:50:08.1569129Z === RUN   TestAccCluster_basicGCPRegionName
2026-07-09T00:51:39.4712183Z     shared_resource.go:160: 
2026-07-09T00:51:39.4716450Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:51:39.4718357Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-09T00:51:39.4720089Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-09T00:51:39.4722004Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-09T00:51:39.4723933Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-09T00:51:39.4725781Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:1060
2026-07-09T00:51:39.4726588Z         	Error:      	Received unexpected error:
2026-07-09T00:51:39.4728498Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:51:39.4729541Z         	Test:       	TestAccCluster_basicGCPRegionName
2026-07-09T00:51:39.4731271Z         	Messages:   	Project creation failed: test-acc-tf-p-2932381502381810802, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:51:39.4733069Z --- FAIL: TestAccCluster_basicGCPRegionName (91.32s)
```

- 2026-07-10 PASS 40 minutes
- 2026-07-11 PASS 24 minutes
- 2026-07-12: MISSING
- 2026-07-13 PASS 37 minutes
- 2026-07-14

### Error 2026-07-14T00:43:04+00:00
```
2026-07-14T00:43:04.8260123Z === RUN   TestAccCluster_basicGCPRegionName
2026-07-14T00:44:07.9327704Z     shared_resource.go:160: 
2026-07-14T00:44:07.9331891Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-14T00:44:07.9336007Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-14T00:44:07.9338000Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-14T00:44:07.9340126Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-14T00:44:07.9342129Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-14T00:44:07.9344178Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:1060
2026-07-14T00:44:07.9345099Z         	Error:      	Received unexpected error:
2026-07-14T00:44:07.9348774Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-14T00:44:07.9351221Z         	Test:       	TestAccCluster_basicGCPRegionName
2026-07-14T00:44:07.9355091Z         	Messages:   	Project creation failed: test-acc-tf-p-4620502384808721987, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-14T00:44:07.9357115Z --- FAIL: TestAccCluster_basicGCPRegionName (63.11s)
```

- 2026-07-15 PASS 32 minutes
- 2026-07-16 PASS an hour
- 2026-07-17 PASS 37 minutes
- 2026-07-18 PASS 23 minutes
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:52:29+00:00
```
2026-07-21T00:52:29.8640153Z === RUN   TestAccCluster_basicGCPRegionName
2026-07-21T00:52:30.7942512Z     shared_resource.go:160: 
2026-07-21T00:52:30.7946586Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:52:30.7949182Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-21T00:52:30.7951369Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-21T00:52:30.7953298Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-21T00:52:30.7955124Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-21T00:52:30.7957918Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:1060
2026-07-21T00:52:30.7959212Z         	Error:      	Received unexpected error:
2026-07-21T00:52:30.7962098Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:52:30.7963507Z         	Test:       	TestAccCluster_basicGCPRegionName
2026-07-21T00:52:30.7966023Z         	Messages:   	Project creation failed: test-acc-tf-p-2770264391026597922, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:52:30.7967597Z --- FAIL: TestAccCluster_basicGCPRegionName (0.93s)
```

- 2026-07-22 PASS 37 minutes
- 2026-07-23

### Error 2026-07-23T00:48:22+00:00
```
2026-07-23T00:48:22.6867133Z === RUN   TestAccCluster_basicGCPRegionName
2026-07-23T00:48:23.6286335Z     shared_resource.go:160: 
2026-07-23T00:48:23.6287773Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:48:23.6289555Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-23T00:48:23.6291291Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-23T00:48:23.6293271Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-23T00:48:23.6294976Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-23T00:48:23.6296811Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:1060
2026-07-23T00:48:23.6297601Z         	Error:      	Received unexpected error:
2026-07-23T00:48:23.6300313Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:48:23.6302215Z         	Test:       	TestAccCluster_basicGCPRegionName
2026-07-23T00:48:23.6304502Z         	Messages:   	Project creation failed: test-acc-tf-p-8157994552635111788, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:48:23.6305956Z --- FAIL: TestAccCluster_basicGCPRegionName (0.94s)
```

- 2026-07-24 PASS an hour
- 2026-07-25 PASS 40 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS an hour
- 2026-07-28 PASS an hour
- 2026-07-29 PASS 38 minutes
- 2026-07-30 PASS an hour
- 2026-07-31 PASS 23 minutes
- 2026-08-01 PASS 21 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 21 minutes
- 2026-08-04 PASS 21 minutes
- 2026-08-05 PASS 20 minutes
- 2026-08-06 PASS 21 minutes
- 2026-08-07 PASS 19 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 35 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 35 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 41 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 30 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 24 minutes
  - PASS 29 minutes
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 21 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
