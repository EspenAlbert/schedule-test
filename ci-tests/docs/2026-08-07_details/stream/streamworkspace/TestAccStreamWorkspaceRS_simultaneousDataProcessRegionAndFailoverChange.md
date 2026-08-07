# stream/streamworkspace/TestAccStreamWorkspaceRS_simultaneousDataProcessRegionAndFailoverChange Test Details
# Found 34 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 30) FAIL(x 4)
Success rate: 88.24%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 01:15](#error-2026-07-09t0115210000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.02s
[2026-07-11 01:30](#error-2026-07-11t0130510000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 86.01s
[2026-07-21 00:59](#error-2026-07-21t0059130000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.07s
[2026-07-23 03:35](#error-2026-07-23t0335040000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.05s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T01:15:21+00:00
```
2026-07-09T01:15:21.6616303Z === RUN   TestAccStreamWorkspaceRS_simultaneousDataProcessRegionAndFailoverChange
2026-07-09T01:15:21.6616878Z     resource_test.go:164: Creating execution project (1): test-acc-tf-p-6600609780865765834
2026-07-09T01:15:21.6617280Z     resource_test.go:164: 
2026-07-09T01:15:21.6618132Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T01:15:21.6619502Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T01:15:21.6620861Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T01:15:21.6622280Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamworkspace/resource_test.go:164
2026-07-09T01:15:21.6623027Z         	Error:      	Received unexpected error:
2026-07-09T01:15:21.6625191Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T01:15:21.6626524Z         	Test:       	TestAccStreamWorkspaceRS_simultaneousDataProcessRegionAndFailoverChange
2026-07-09T01:15:21.6628407Z         	Messages:   	Project creation failed: test-acc-tf-p-6600609780865765834, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T01:15:21.6629694Z --- FAIL: TestAccStreamWorkspaceRS_simultaneousDataProcessRegionAndFailoverChange (1.19s)
```

- 2026-07-10 PASS a second
- 2026-07-11

### Error 2026-07-11T01:30:51+00:00
```
2026-07-11T01:30:51.8019679Z === RUN   TestAccStreamWorkspaceRS_simultaneousDataProcessRegionAndFailoverChange
2026-07-11T01:30:51.8020424Z     resource_test.go:177: Creating execution project (1): test-acc-tf-p-360452371205023445
2026-07-11T01:30:51.8020947Z     resource_test.go:177: 
2026-07-11T01:30:51.8021879Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T01:30:51.8023708Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T01:30:51.8025546Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T01:30:51.8027471Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamworkspace/resource_test.go:177
2026-07-11T01:30:51.8028446Z         	Error:      	Received unexpected error:
2026-07-11T01:30:51.8030414Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T01:30:51.8031831Z         	Test:       	TestAccStreamWorkspaceRS_simultaneousDataProcessRegionAndFailoverChange
2026-07-11T01:30:51.8033757Z         	Messages:   	Project creation failed: test-acc-tf-p-360452371205023445, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T01:30:51.8035123Z --- FAIL: TestAccStreamWorkspaceRS_simultaneousDataProcessRegionAndFailoverChange (86.13s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS a second
- 2026-07-14 PASS 2 seconds
- 2026-07-15 PASS 2 seconds
- 2026-07-16 PASS 2 seconds
- 2026-07-17 PASS a second
- 2026-07-18 PASS 2 seconds
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:59:13+00:00
```
2026-07-21T00:59:13.4082591Z === RUN   TestAccStreamWorkspaceRS_simultaneousDataProcessRegionAndFailoverChange
2026-07-21T00:59:13.4083336Z     resource_test.go:177: Creating execution project (1): test-acc-tf-p-3683068933711330523
2026-07-21T00:59:13.4083866Z     resource_test.go:177: 
2026-07-21T00:59:13.4084801Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:59:13.4086861Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:59:13.4088732Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:59:13.4090675Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamworkspace/resource_test.go:177
2026-07-21T00:59:13.4091513Z         	Error:      	Received unexpected error:
2026-07-21T00:59:13.4094554Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:59:13.4096211Z         	Test:       	TestAccStreamWorkspaceRS_simultaneousDataProcessRegionAndFailoverChange
2026-07-21T00:59:13.4098777Z         	Messages:   	Project creation failed: test-acc-tf-p-3683068933711330523, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:59:13.4100510Z --- FAIL: TestAccStreamWorkspaceRS_simultaneousDataProcessRegionAndFailoverChange (0.72s)
```

- 2026-07-22 PASS a second
- 2026-07-23

### Error 2026-07-23T03:35:04+00:00
```
2026-07-23T03:35:04.6628279Z === RUN   TestAccStreamWorkspaceRS_simultaneousDataProcessRegionAndFailoverChange
2026-07-23T03:35:04.6629531Z     resource_test.go:177: Creating execution project (1): test-acc-tf-p-3793785247189068998
2026-07-23T03:35:04.6630362Z     resource_test.go:177: 
2026-07-23T03:35:04.6631900Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T03:35:04.6634952Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T03:35:04.6638247Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T03:35:04.6641457Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamworkspace/resource_test.go:177
2026-07-23T03:35:04.6643069Z         	Error:      	Received unexpected error:
2026-07-23T03:35:04.6648138Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T03:35:04.6650793Z         	Test:       	TestAccStreamWorkspaceRS_simultaneousDataProcessRegionAndFailoverChange
2026-07-23T03:35:04.6654856Z         	Messages:   	Project creation failed: test-acc-tf-p-3793785247189068998, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T03:35:04.6657832Z --- FAIL: TestAccStreamWorkspaceRS_simultaneousDataProcessRegionAndFailoverChange (0.53s)
```

- 2026-07-24 PASS a second
- 2026-07-25 PASS a second
- 2026-07-26: MISSING
- 2026-07-27 PASS 2 seconds
- 2026-07-28 PASS a second
- 2026-07-29 PASS a second
- 2026-07-30 PASS a second
- 2026-07-31 PASS a second
- 2026-08-01 PASS a second
- 2026-08-02: MISSING
- 2026-08-03
  - PASS a second
  - PASS a second
  - PASS a second
- 2026-08-04 PASS a second
- 2026-08-05 PASS 2 seconds
- 2026-08-06 PASS a second
- 2026-08-07 PASS a second

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS a second
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS a second
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 2 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS a second
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS a second
  - PASS a second
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS a second
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
