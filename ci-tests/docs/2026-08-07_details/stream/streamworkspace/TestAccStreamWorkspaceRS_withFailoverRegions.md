# stream/streamworkspace/TestAccStreamWorkspaceRS_withFailoverRegions Test Details
# Found 34 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 29) FAIL(x 5)
Success rate: 85.29%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 01:15](#error-2026-07-09t0115210000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 79.01s
[2026-07-11 01:30](#error-2026-07-11t0130510000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.03s
[2026-07-18 01:45](#error-2026-07-18t0145130000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.03s
[2026-07-21 00:59](#error-2026-07-21t0059130000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.03s
[2026-07-23 03:35](#error-2026-07-23t0335040000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.00s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T01:15:21+00:00
```
2026-07-09T01:15:21.6577817Z === RUN   TestAccStreamWorkspaceRS_withFailoverRegions
2026-07-09T01:15:21.6578301Z     resource_test.go:61: Creating execution project (1): test-acc-tf-p-5889941413273381286
2026-07-09T01:15:21.6578693Z     resource_test.go:61: 
2026-07-09T01:15:21.6579397Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T01:15:21.6580753Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T01:15:21.6582110Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T01:15:21.6583538Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamworkspace/resource_test.go:61
2026-07-09T01:15:21.6584167Z         	Error:      	Received unexpected error:
2026-07-09T01:15:21.6585715Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:15:21.6586550Z         	Test:       	TestAccStreamWorkspaceRS_withFailoverRegions
2026-07-09T01:15:21.6587902Z         	Messages:   	Project creation failed: test-acc-tf-p-5889941413273381286, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:15:21.6588930Z --- FAIL: TestAccStreamWorkspaceRS_withFailoverRegions (79.06s)
```

- 2026-07-10 PASS 2 seconds
- 2026-07-11

### Error 2026-07-11T01:30:51+00:00
```
2026-07-11T01:30:51.7972414Z === RUN   TestAccStreamWorkspaceRS_withFailoverRegions
2026-07-11T01:30:51.7973042Z     resource_test.go:71: Creating execution project (1): test-acc-tf-p-3711932275449879227
2026-07-11T01:30:51.7973574Z     resource_test.go:71: 
2026-07-11T01:30:51.7974509Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T01:30:51.7976345Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T01:30:51.7978203Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T01:30:51.7980262Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamworkspace/resource_test.go:71
2026-07-11T01:30:51.7981095Z         	Error:      	Received unexpected error:
2026-07-11T01:30:51.7983055Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T01:30:51.7984176Z         	Test:       	TestAccStreamWorkspaceRS_withFailoverRegions
2026-07-11T01:30:51.7986009Z         	Messages:   	Project creation failed: test-acc-tf-p-3711932275449879227, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T01:30:51.7987279Z --- FAIL: TestAccStreamWorkspaceRS_withFailoverRegions (62.29s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 2 seconds
- 2026-07-14 PASS 2 seconds
- 2026-07-15 PASS 2 seconds
- 2026-07-16 PASS 2 seconds
- 2026-07-17 PASS 2 seconds
- 2026-07-18

### Error 2026-07-18T01:45:13+00:00
```
2026-07-18T01:45:13.0883496Z === RUN   TestAccStreamWorkspaceRS_withFailoverRegions
2026-07-18T01:45:13.0884455Z     resource_test.go:71: Creating execution project (1): test-acc-tf-p-5622741227573872936
2026-07-18T01:45:13.0885100Z     resource_test.go:71: 
2026-07-18T01:45:13.0886187Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T01:45:13.0888268Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-18T01:45:13.0890379Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-18T01:45:13.0892293Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamworkspace/resource_test.go:71
2026-07-18T01:45:13.0893131Z         	Error:      	Received unexpected error:
2026-07-18T01:45:13.0895359Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T01:45:13.0896645Z         	Test:       	TestAccStreamWorkspaceRS_withFailoverRegions
2026-07-18T01:45:13.0898478Z         	Messages:   	Project creation failed: test-acc-tf-p-5622741227573872936, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T01:45:13.0899741Z --- FAIL: TestAccStreamWorkspaceRS_withFailoverRegions (63.26s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:59:13+00:00
```
2026-07-21T00:59:13.4030261Z === RUN   TestAccStreamWorkspaceRS_withFailoverRegions
2026-07-21T00:59:13.4030888Z     resource_test.go:71: Creating execution project (1): test-acc-tf-p-2499667448404197562
2026-07-21T00:59:13.4031407Z     resource_test.go:71: 
2026-07-21T00:59:13.4032492Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:59:13.4034519Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:59:13.4036399Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:59:13.4038343Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamworkspace/resource_test.go:71
2026-07-21T00:59:13.4039179Z         	Error:      	Received unexpected error:
2026-07-21T00:59:13.4041178Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:59:13.4042461Z         	Test:       	TestAccStreamWorkspaceRS_withFailoverRegions
2026-07-21T00:59:13.4044444Z         	Messages:   	Project creation failed: test-acc-tf-p-2499667448404197562, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:59:13.4045728Z --- FAIL: TestAccStreamWorkspaceRS_withFailoverRegions (62.34s)
```

- 2026-07-22 PASS a second
- 2026-07-23

### Error 2026-07-23T03:35:04+00:00
```
2026-07-23T03:35:04.6534695Z === RUN   TestAccStreamWorkspaceRS_withFailoverRegions
2026-07-23T03:35:04.6535745Z     resource_test.go:71: Creating execution project (1): test-acc-tf-p-7857005456118193804
2026-07-23T03:35:04.6536602Z     resource_test.go:71: 
2026-07-23T03:35:04.6538332Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T03:35:04.6541535Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T03:35:04.6544708Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T03:35:04.6548312Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamworkspace/resource_test.go:71
2026-07-23T03:35:04.6549754Z         	Error:      	Received unexpected error:
2026-07-23T03:35:04.6554845Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T03:35:04.6557539Z         	Test:       	TestAccStreamWorkspaceRS_withFailoverRegions
2026-07-23T03:35:04.6561793Z         	Messages:   	Project creation failed: test-acc-tf-p-7857005456118193804, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T03:35:04.6564804Z --- FAIL: TestAccStreamWorkspaceRS_withFailoverRegions (1.04s)
```

- 2026-07-24 PASS a second
- 2026-07-25 PASS a second
- 2026-07-26: MISSING
- 2026-07-27 PASS 4 seconds
- 2026-07-28 PASS 2 seconds
- 2026-07-29 PASS a second
- 2026-07-30 PASS a second
- 2026-07-31 PASS a second
- 2026-08-01 PASS a second
- 2026-08-02: MISSING
- 2026-08-03
  - PASS a second
  - PASS 2 seconds
  - PASS a second
- 2026-08-04 PASS 2 seconds
- 2026-08-05 PASS 2 seconds
- 2026-08-06 PASS 2 seconds
- 2026-08-07 PASS 2 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 2 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 2 seconds
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
- 2026-07-26 PASS 2 seconds
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
