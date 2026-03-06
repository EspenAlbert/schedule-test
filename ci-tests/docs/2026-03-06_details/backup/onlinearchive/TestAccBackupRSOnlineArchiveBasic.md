# backup/onlinearchive/TestAccBackupRSOnlineArchiveBasic Test Details
# Found 34 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 32) FAIL(x 2)
Success rate: 94.12%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-13 01:30](#error-2026-02-13t0130270000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.02s
[2026-02-24 01:20](#error-2026-02-24t0120270000) |  | dev | flaky_500 | 2.00s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 23 minutes
- 2026-02-06 PASS 21 minutes
- 2026-02-07 PASS 21 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 20 minutes
- 2026-02-10 PASS 19 minutes
- 2026-02-11 PASS 18 minutes
- 2026-02-12 PASS 19 minutes
- 2026-02-13

### Error 2026-02-13T01:30:27+00:00
```
2026-02-13T01:30:27.5309684Z === RUN   TestAccBackupRSOnlineArchiveBasic
2026-02-13T01:30:27.5310246Z     resource_test.go:123: Creating execution project (1): test-acc-tf-p-2938753942262284010
2026-02-13T01:30:27.5310731Z     resource_test.go:123: 
2026-02-13T01:30:27.5311615Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-02-13T01:30:27.5313362Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:151
2026-02-13T01:30:27.5315245Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:107
2026-02-13T01:30:27.5316916Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-02-13T01:30:27.5318710Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/onlinearchive/resource_test.go:123
2026-02-13T01:30:27.5319872Z         	            				/opt/hostedtoolcache/go/1.25.7/x64/src/runtime/asm_amd64.s:1693
2026-02-13T01:30:27.5320367Z         	Error:      	Received unexpected error:
2026-02-13T01:30:27.5323079Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-13T01:30:27.5324436Z         	Test:       	TestAccBackupRSOnlineArchiveBasic
2026-02-13T01:30:27.5326843Z         	Messages:   	Project creation failed: test-acc-tf-p-2938753942262284010, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-13T01:30:27.5328356Z --- FAIL: TestAccBackupRSOnlineArchiveBasic (0.21s)
```

- 2026-02-14 PASS 21 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 22 minutes
- 2026-02-17 PASS 21 minutes
- 2026-02-18 PASS 20 minutes
- 2026-02-19 PASS 36 minutes
- 2026-02-20 PASS 21 minutes
- 2026-02-21 PASS 22 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 21 minutes
- 2026-02-24

### Error 2026-02-24T01:20:27+00:00
```
2026-02-24T01:20:27.2910570Z === RUN   TestAccBackupRSOnlineArchiveBasic
2026-02-24T01:20:27.2911584Z     resource_test.go:123: Creating execution project (1): test-acc-tf-p-8760532779082375401
2026-02-24T01:20:27.2912464Z     resource_test.go:123: 
2026-02-24T01:20:27.2914103Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-02-24T01:20:27.2917641Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-02-24T01:20:27.2921010Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-02-24T01:20:27.2924195Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-02-24T01:20:27.2927749Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/onlinearchive/resource_test.go:123
2026-02-24T01:20:27.2929940Z         	            				/opt/hostedtoolcache/go/1.25.7/x64/src/runtime/asm_amd64.s:1693
2026-02-24T01:20:27.2930863Z         	Error:      	Received unexpected error:
2026-02-24T01:20:27.2932520Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2026-02-24T01:20:27.2933603Z         	Test:       	TestAccBackupRSOnlineArchiveBasic
2026-02-24T01:20:27.2935730Z         	Messages:   	Project creation failed: test-acc-tf-p-8760532779082375401, err: (503 Service Unavailable) failed to decode response body: undefined response type
2026-02-24T01:20:27.2937293Z --- FAIL: TestAccBackupRSOnlineArchiveBasic (2.05s)
```

- 2026-02-25 PASS 20 minutes
- 2026-02-26 PASS 28 minutes
- 2026-02-27 PASS 20 minutes
- 2026-02-28 PASS 19 minutes
- 2026-03-01: MISSING
- 2026-03-02 PASS 20 minutes
- 2026-03-03 PASS 22 minutes
- 2026-03-04 PASS 19 minutes
- 2026-03-05 PASS 35 minutes
- 2026-03-06 PASS 45 minutes

## QA Environment
### Timeline
- 2026-02-04 PASS 18 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 23 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 21 minutes
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 22 minutes
  - PASS 16 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 20 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 25 minutes
- 2026-03-02: MISSING
- 2026-03-03 PASS 21 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
