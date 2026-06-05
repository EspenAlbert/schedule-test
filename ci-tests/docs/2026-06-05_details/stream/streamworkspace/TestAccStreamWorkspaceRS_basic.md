# stream/streamworkspace/TestAccStreamWorkspaceRS_basic Test Details
# Found 35 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 30) FAIL(x 5)
Success rate: 85.71%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:47](#error-2026-05-09t0147380000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 112.08s
[2026-05-19 02:05](#error-2026-05-19t0205390000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 77.03s
[2026-05-23 02:16](#error-2026-05-23t0216580000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.08s
[2026-05-28 02:40](#error-2026-05-28t0240170000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.02s
[2026-06-02 01:54](#error-2026-06-02t0154340000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.07s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 3 seconds
  - PASS 3 seconds
- 2026-05-08 PASS 2 seconds
- 2026-05-09
  - PASS 2 seconds
  - FAIL a minute

### Error 2026-05-09T01:47:38+00:00
```
2026-05-09T01:47:38.1633848Z === RUN   TestAccStreamWorkspaceRS_basic
2026-05-09T01:47:38.1634627Z     resource_test.go:23: Creating execution project (1): test-acc-tf-p-9056352451301415741
2026-05-09T01:47:38.1635140Z     resource_test.go:23: 
2026-05-09T01:47:38.1636273Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:47:38.1638446Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T01:47:38.1640753Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T01:47:38.1643215Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamworkspace/resource_test.go:23
2026-05-09T01:47:38.1644082Z         	Error:      	Received unexpected error:
2026-05-09T01:47:38.1646644Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:47:38.1647947Z         	Test:       	TestAccStreamWorkspaceRS_basic
2026-05-09T01:47:38.1650048Z         	Messages:   	Project creation failed: test-acc-tf-p-9056352451301415741, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:47:38.1651541Z --- FAIL: TestAccStreamWorkspaceRS_basic (112.84s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 2 seconds
- 2026-05-12 PASS 4 seconds
- 2026-05-13 PASS 3 seconds
- 2026-05-14 PASS 3 seconds
- 2026-05-15 PASS 2 seconds
- 2026-05-16 PASS a minute
- 2026-05-17: MISSING
- 2026-05-18 PASS 2 seconds
- 2026-05-19

### Error 2026-05-19T02:05:39+00:00
```
2026-05-19T02:05:39.1905985Z === RUN   TestAccStreamWorkspaceRS_basic
2026-05-19T02:05:39.1906513Z     resource_test.go:23: Creating execution project (1): test-acc-tf-p-8321844768411378455
2026-05-19T02:05:39.1906981Z     resource_test.go:23: 
2026-05-19T02:05:39.1907893Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-19T02:05:39.1909585Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-19T02:05:39.1911260Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-19T02:05:39.1912967Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamworkspace/resource_test.go:23
2026-05-19T02:05:39.1913834Z         	Error:      	Received unexpected error:
2026-05-19T02:05:39.1915563Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T02:05:39.1916522Z         	Test:       	TestAccStreamWorkspaceRS_basic
2026-05-19T02:05:39.1918091Z         	Messages:   	Project creation failed: test-acc-tf-p-8321844768411378455, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T02:05:39.1919186Z --- FAIL: TestAccStreamWorkspaceRS_basic (77.28s)
```

- 2026-05-20
  - PASS 3 seconds
  - PASS 2 seconds
- 2026-05-21 PASS 8 seconds
- 2026-05-22 PASS 2 seconds
- 2026-05-23

### Error 2026-05-23T02:16:58+00:00
```
2026-05-23T02:16:58.5367667Z === RUN   TestAccStreamWorkspaceRS_basic
2026-05-23T02:16:58.5368251Z     resource_test.go:23: Creating execution project (1): test-acc-tf-p-7293586792322684776
2026-05-23T02:16:58.5368759Z     resource_test.go:23: 
2026-05-23T02:16:58.5369685Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-23T02:16:58.5371475Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-23T02:16:58.5373468Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-23T02:16:58.5375520Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamworkspace/resource_test.go:23
2026-05-23T02:16:58.5376339Z         	Error:      	Received unexpected error:
2026-05-23T02:16:58.5378297Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T02:16:58.5379302Z         	Test:       	TestAccStreamWorkspaceRS_basic
2026-05-23T02:16:58.5381032Z         	Messages:   	Project creation failed: test-acc-tf-p-7293586792322684776, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T02:16:58.5382163Z --- FAIL: TestAccStreamWorkspaceRS_basic (61.75s)
```

- 2026-05-24: MISSING
- 2026-05-25 PASS 2 seconds
- 2026-05-26 PASS 5 seconds
- 2026-05-27 PASS 3 seconds
- 2026-05-28

### Error 2026-05-28T02:40:17+00:00
```
2026-05-28T02:40:17.5785451Z === RUN   TestAccStreamWorkspaceRS_basic
2026-05-28T02:40:17.5786015Z     resource_test.go:23: Creating execution project (1): test-acc-tf-p-5250396279895579028
2026-05-28T02:40:17.5786507Z     resource_test.go:23: 
2026-05-28T02:40:17.5787617Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T02:40:17.5789451Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T02:40:17.5791248Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T02:40:17.5793131Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamworkspace/resource_test.go:23
2026-05-28T02:40:17.5793940Z         	Error:      	Received unexpected error:
2026-05-28T02:40:17.5796746Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T02:40:17.5798336Z         	Test:       	TestAccStreamWorkspaceRS_basic
2026-05-28T02:40:17.5800669Z         	Messages:   	Project creation failed: test-acc-tf-p-5250396279895579028, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T02:40:17.5802351Z --- FAIL: TestAccStreamWorkspaceRS_basic (1.24s)
```

- 2026-05-29 PASS 3 seconds
- 2026-05-30 PASS a minute
- 2026-05-31: MISSING
- 2026-06-01 PASS 2 seconds
- 2026-06-02

### Error 2026-06-02T01:54:34+00:00
```
2026-06-02T01:54:34.5895235Z === RUN   TestAccStreamWorkspaceRS_basic
2026-06-02T01:54:34.5895813Z     resource_test.go:23: Creating execution project (1): test-acc-tf-p-4555927762839972200
2026-06-02T01:54:34.5896305Z     resource_test.go:23: 
2026-06-02T01:54:34.5897163Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-06-02T01:54:34.5898808Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-06-02T01:54:34.5900469Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-06-02T01:54:34.5902180Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamworkspace/resource_test.go:23
2026-06-02T01:54:34.5902954Z         	Error:      	Received unexpected error:
2026-06-02T01:54:34.5904744Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:54:34.5905812Z         	Test:       	TestAccStreamWorkspaceRS_basic
2026-06-02T01:54:34.5907427Z         	Messages:   	Project creation failed: test-acc-tf-p-4555927762839972200, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:54:34.5908549Z --- FAIL: TestAccStreamWorkspaceRS_basic (62.69s)
```

- 2026-06-03 PASS 2 seconds
- 2026-06-04 PASS 3 seconds
- 2026-06-05 PASS 2 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 2 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 2 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 2 seconds
- 2026-05-25 PASS 3 seconds
- 2026-05-26 PASS 2 seconds
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 2 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
