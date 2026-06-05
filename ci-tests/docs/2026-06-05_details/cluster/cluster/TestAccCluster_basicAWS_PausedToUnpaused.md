# cluster/cluster/TestAccCluster_basicAWS_PausedToUnpaused Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 29) FAIL(x 2)
Success rate: 93.55%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:04](#error-2026-05-09t0104060000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.08s
[2026-05-28 01:01](#error-2026-05-28t0101010000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.01s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 44 minutes
  - PASS an hour
- 2026-05-08 PASS 38 minutes
- 2026-05-09

### Error 2026-05-09T01:04:06+00:00
```
2026-05-09T01:04:06.6871059Z === RUN   TestAccCluster_basicAWS_PausedToUnpaused
2026-05-09T01:05:11.5247172Z     shared_resource.go:160: 
2026-05-09T01:05:11.5249245Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:05:11.5252788Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-05-09T01:05:11.5256212Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-05-09T01:05:11.5260096Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-05-09T01:05:11.5263040Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-05-09T01:05:11.5266534Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:1260
2026-05-09T01:05:11.5267892Z         	Error:      	Received unexpected error:
2026-05-09T01:05:11.5271255Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:05:11.5272730Z         	Test:       	TestAccCluster_basicAWS_PausedToUnpaused
2026-05-09T01:05:11.5275427Z         	Messages:   	Project creation failed: test-acc-tf-p-5561036814349501166, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:05:11.5277682Z --- FAIL: TestAccCluster_basicAWS_PausedToUnpaused (64.84s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 29 minutes
- 2026-05-12 PASS 25 minutes
- 2026-05-13 PASS 28 minutes
- 2026-05-14 PASS 44 minutes
- 2026-05-15 PASS 30 minutes
- 2026-05-16 PASS 23 minutes
- 2026-05-17: MISSING
- 2026-05-18 PASS 48 minutes
- 2026-05-19 PASS 23 minutes
- 2026-05-20 PASS 35 minutes
- 2026-05-21 PASS 30 minutes
- 2026-05-22 PASS 57 minutes
- 2026-05-23 PASS 38 minutes
- 2026-05-24: MISSING
- 2026-05-25 PASS 31 minutes
- 2026-05-26 PASS 28 minutes
- 2026-05-27 PASS an hour
- 2026-05-28

### Error 2026-05-28T01:01:01+00:00
```
2026-05-28T01:01:01.2427674Z === RUN   TestAccCluster_basicAWS_PausedToUnpaused
2026-05-28T01:01:02.3454577Z     shared_resource.go:160: 
2026-05-28T01:01:02.3456114Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:01:02.3458991Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-05-28T01:01:02.3462149Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-05-28T01:01:02.3465286Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-05-28T01:01:02.3468797Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-05-28T01:01:02.3471264Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:1237
2026-05-28T01:01:02.3472518Z         	Error:      	Received unexpected error:
2026-05-28T01:01:02.3476991Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:01:02.3479479Z         	Test:       	TestAccCluster_basicAWS_PausedToUnpaused
2026-05-28T01:01:02.3483091Z         	Messages:   	Project creation failed: test-acc-tf-p-2482996726256608556, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:01:02.3485629Z --- FAIL: TestAccCluster_basicAWS_PausedToUnpaused (1.10s)
```

- 2026-05-29 PASS 32 minutes
- 2026-05-30 PASS 23 minutes
- 2026-05-31: MISSING
- 2026-06-01 PASS 39 minutes
- 2026-06-02 PASS 23 minutes
- 2026-06-03 PASS 47 minutes
- 2026-06-04 PASS 52 minutes
- 2026-06-05 PASS 35 minutes

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 33 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 32 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 31 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 27 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
