# stream/streamworkspace/TestAccStreamWorkspaceRS_basic Test Details
# Found 34 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 29) FAIL(x 5)
Success rate: 85.29%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 01:15](#error-2026-07-09t0115210000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.04s
[2026-07-11 01:30](#error-2026-07-11t0130510000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.02s
[2026-07-18 01:45](#error-2026-07-18t0145130000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 88.00s
[2026-07-21 00:59](#error-2026-07-21t0059130000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.02s
[2026-07-23 03:35](#error-2026-07-23t0335040000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.03s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T01:15:21+00:00
```
2026-07-09T01:15:21.6566422Z === RUN   TestAccStreamWorkspaceRS_basic
2026-07-09T01:15:21.6566877Z     resource_test.go:25: Creating execution project (1): test-acc-tf-p-6209842331836593297
2026-07-09T01:15:21.6567285Z     resource_test.go:25: 
2026-07-09T01:15:21.6567996Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T01:15:21.6569352Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T01:15:21.6570819Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T01:15:21.6572232Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamworkspace/resource_test.go:25
2026-07-09T01:15:21.6572864Z         	Error:      	Received unexpected error:
2026-07-09T01:15:21.6574329Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:15:21.6575109Z         	Test:       	TestAccStreamWorkspaceRS_basic
2026-07-09T01:15:21.6576568Z         	Messages:   	Project creation failed: test-acc-tf-p-6209842331836593297, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:15:21.6577485Z --- FAIL: TestAccStreamWorkspaceRS_basic (65.42s)
```

- 2026-07-10 PASS 2 seconds
- 2026-07-11

### Error 2026-07-11T01:30:51+00:00
```
2026-07-11T01:30:51.7956802Z === RUN   TestAccStreamWorkspaceRS_basic
2026-07-11T01:30:51.7957392Z     resource_test.go:25: Creating execution project (1): test-acc-tf-p-8015187323237082206
2026-07-11T01:30:51.7957909Z     resource_test.go:25: 
2026-07-11T01:30:51.7959287Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T01:30:51.7961126Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T01:30:51.7962953Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T01:30:51.7964859Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamworkspace/resource_test.go:25
2026-07-11T01:30:51.7965688Z         	Error:      	Received unexpected error:
2026-07-11T01:30:51.7967643Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T01:30:51.7968982Z         	Test:       	TestAccStreamWorkspaceRS_basic
2026-07-11T01:30:51.7970782Z         	Messages:   	Project creation failed: test-acc-tf-p-8015187323237082206, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T01:30:51.7971991Z --- FAIL: TestAccStreamWorkspaceRS_basic (62.18s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 4 seconds
- 2026-07-14 PASS 6 seconds
- 2026-07-15 PASS 5 seconds
- 2026-07-16 PASS 7 seconds
- 2026-07-17 PASS 4 seconds
- 2026-07-18

### Error 2026-07-18T01:45:13+00:00
```
2026-07-18T01:45:13.0859940Z === RUN   TestAccStreamWorkspaceRS_basic
2026-07-18T01:45:13.0861046Z     resource_test.go:25: Creating execution project (1): test-acc-tf-p-7528892821405931712
2026-07-18T01:45:13.0861936Z     resource_test.go:25: 
2026-07-18T01:45:13.0863641Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T01:45:13.0867260Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-18T01:45:13.0870615Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-18T01:45:13.0874186Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamworkspace/resource_test.go:25
2026-07-18T01:45:13.0875760Z         	Error:      	Received unexpected error:
2026-07-18T01:45:13.0878082Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T01:45:13.0879316Z         	Test:       	TestAccStreamWorkspaceRS_basic
2026-07-18T01:45:13.0881590Z         	Messages:   	Project creation failed: test-acc-tf-p-7528892821405931712, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T01:45:13.0883006Z --- FAIL: TestAccStreamWorkspaceRS_basic (88.02s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:59:13+00:00
```
2026-07-21T00:59:13.4014865Z === RUN   TestAccStreamWorkspaceRS_basic
2026-07-21T00:59:13.4015461Z     resource_test.go:25: Creating execution project (1): test-acc-tf-p-661993532875077759
2026-07-21T00:59:13.4015977Z     resource_test.go:25: 
2026-07-21T00:59:13.4016915Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:59:13.4018770Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:59:13.4020626Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:59:13.4022698Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamworkspace/resource_test.go:25
2026-07-21T00:59:13.4023541Z         	Error:      	Received unexpected error:
2026-07-21T00:59:13.4025554Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:59:13.4026622Z         	Test:       	TestAccStreamWorkspaceRS_basic
2026-07-21T00:59:13.4028477Z         	Messages:   	Project creation failed: test-acc-tf-p-661993532875077759, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:59:13.4029696Z --- FAIL: TestAccStreamWorkspaceRS_basic (62.17s)
```

- 2026-07-22 PASS 3 seconds
- 2026-07-23

### Error 2026-07-23T03:35:04+00:00
```
2026-07-23T03:35:04.6507509Z === RUN   TestAccStreamWorkspaceRS_basic
2026-07-23T03:35:04.6508109Z     resource_test.go:25: Creating execution project (1): test-acc-tf-p-140518943047155595
2026-07-23T03:35:04.6508630Z     resource_test.go:25: 
2026-07-23T03:35:04.6509570Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T03:35:04.6511441Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T03:35:04.6514568Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T03:35:04.6517974Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamworkspace/resource_test.go:25
2026-07-23T03:35:04.6519449Z         	Error:      	Received unexpected error:
2026-07-23T03:35:04.6524560Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T03:35:04.6526986Z         	Test:       	TestAccStreamWorkspaceRS_basic
2026-07-23T03:35:04.6531320Z         	Messages:   	Project creation failed: test-acc-tf-p-140518943047155595, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T03:35:04.6534000Z --- FAIL: TestAccStreamWorkspaceRS_basic (0.27s)
```

- 2026-07-24 PASS 4 seconds
- 2026-07-25 PASS 2 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 5 seconds
- 2026-07-28 PASS 3 seconds
- 2026-07-29 PASS 2 seconds
- 2026-07-30 PASS 2 seconds
- 2026-07-31 PASS 2 seconds
- 2026-08-01 PASS 3 seconds
- 2026-08-02: MISSING
- 2026-08-03
  - PASS 2 seconds
  - PASS 4 seconds
  - PASS 2 seconds
- 2026-08-04 PASS 3 seconds
- 2026-08-05 PASS 5 seconds
- 2026-08-06 PASS 4 seconds
- 2026-08-07 PASS 5 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 3 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 3 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 5 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 5 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 2 seconds
  - PASS 2 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 3 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
