# backup/onlinearchive/TestAccBackupRSOnlineArchive Test Details
# Found 34 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 32) FAIL(x 2)
Success rate: 94.12%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-13 01:30](#error-2026-02-13t0130270000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.03s
[2026-02-24 01:20](#error-2026-02-24t0120270000) |  | dev | flaky_500 | 0.04s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 22 minutes
- 2026-02-06 PASS 22 minutes
- 2026-02-07 PASS 20 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 20 minutes
- 2026-02-10 PASS 21 minutes
- 2026-02-11 PASS 19 minutes
- 2026-02-12 PASS 20 minutes
- 2026-02-13

### Error 2026-02-13T01:30:27+00:00
```
2026-02-13T01:30:27.5290032Z === RUN   TestAccBackupRSOnlineArchive
2026-02-13T01:30:27.5290568Z     resource_test.go:28: Creating execution project (1): test-acc-tf-p-5387656378288570236
2026-02-13T01:30:27.5291048Z     resource_test.go:28: 
2026-02-13T01:30:27.5291926Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-02-13T01:30:27.5293706Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:151
2026-02-13T01:30:27.5295768Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:107
2026-02-13T01:30:27.5297451Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-02-13T01:30:27.5299236Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/onlinearchive/resource_test.go:28
2026-02-13T01:30:27.5300389Z         	            				/opt/hostedtoolcache/go/1.25.7/x64/src/runtime/asm_amd64.s:1693
2026-02-13T01:30:27.5300892Z         	Error:      	Received unexpected error:
2026-02-13T01:30:27.5303602Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-13T01:30:27.5305292Z         	Test:       	TestAccBackupRSOnlineArchive
2026-02-13T01:30:27.5307815Z         	Messages:   	Project creation failed: test-acc-tf-p-5387656378288570236, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-13T01:30:27.5309330Z --- FAIL: TestAccBackupRSOnlineArchive (0.25s)
```

- 2026-02-14 PASS 21 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 20 minutes
- 2026-02-17 PASS 22 minutes
- 2026-02-18 PASS 20 minutes
- 2026-02-19 PASS 35 minutes
- 2026-02-20 PASS 24 minutes
- 2026-02-21 PASS 22 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 19 minutes
- 2026-02-24

### Error 2026-02-24T01:20:27+00:00
```
2026-02-24T01:20:27.2883356Z === RUN   TestAccBackupRSOnlineArchive
2026-02-24T01:20:27.2884327Z     resource_test.go:28: Creating execution project (1): test-acc-tf-p-3955513790235011588
2026-02-24T01:20:27.2885352Z     resource_test.go:28: 
2026-02-24T01:20:27.2886992Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-02-24T01:20:27.2890483Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-02-24T01:20:27.2893841Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-02-24T01:20:27.2897201Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-02-24T01:20:27.2900618Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/onlinearchive/resource_test.go:28
2026-02-24T01:20:27.2902814Z         	            				/opt/hostedtoolcache/go/1.25.7/x64/src/runtime/asm_amd64.s:1693
2026-02-24T01:20:27.2903736Z         	Error:      	Received unexpected error:
2026-02-24T01:20:27.2905571Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2026-02-24T01:20:27.2906650Z         	Test:       	TestAccBackupRSOnlineArchive
2026-02-24T01:20:27.2908614Z         	Messages:   	Project creation failed: test-acc-tf-p-3955513790235011588, err: (503 Service Unavailable) failed to decode response body: undefined response type
2026-02-24T01:20:27.2909950Z --- FAIL: TestAccBackupRSOnlineArchive (0.43s)
```

- 2026-02-25 PASS 20 minutes
- 2026-02-26 PASS 31 minutes
- 2026-02-27 PASS 22 minutes
- 2026-02-28 PASS 19 minutes
- 2026-03-01: MISSING
- 2026-03-02 PASS 17 minutes
- 2026-03-03 PASS 21 minutes
- 2026-03-04 PASS 19 minutes
- 2026-03-05 PASS 35 minutes
- 2026-03-06 PASS 20 minutes

## QA Environment
### Timeline
- 2026-02-04 PASS 18 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 24 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 22 minutes
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 21 minutes
  - PASS 17 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 19 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 24 minutes
- 2026-03-02: MISSING
- 2026-03-03 PASS 21 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
