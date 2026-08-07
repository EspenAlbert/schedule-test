# autogen_fast/streamconnectionfailover/TestAccStreamConnectionFailover Test Details
# Found 27 TestRuns in dev, qa from 2026-07-14 to 2026-08-07 from master branch: 1 unique tests, PASS(x 25) FAIL(x 2)
Success rate: 92.59%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-21 00:53](#error-2026-07-21t0053060000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 100.03s
[2026-07-23 00:48](#error-2026-07-23t0048440000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.03s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12: MISSING
- 2026-07-13: MISSING
- 2026-07-14 PASS 57 seconds
- 2026-07-15 PASS 55 seconds
- 2026-07-16 PASS a minute
- 2026-07-17 PASS 58 seconds
- 2026-07-18 PASS a minute
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:06+00:00
```
2026-07-21T00:53:06.0319539Z === RUN   TestAccStreamConnectionFailover
2026-07-21T00:53:06.0320180Z     resource_test.go:37: Creating execution project (1): test-acc-tf-p-8821764706093087676
2026-07-21T00:53:06.0320732Z     resource_test.go:37: 
2026-07-21T00:53:06.0321733Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:53:06.0323598Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:53:06.0325633Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:53:06.0327702Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/streamconnectionfailover/resource_test.go:37
2026-07-21T00:53:06.0328622Z         	Error:      	Received unexpected error:
2026-07-21T00:53:06.0330653Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:53:06.0331731Z         	Test:       	TestAccStreamConnectionFailover
2026-07-21T00:53:06.0333547Z         	Messages:   	Project creation failed: test-acc-tf-p-8821764706093087676, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:53:06.0334754Z --- FAIL: TestAccStreamConnectionFailover (100.28s)
```

- 2026-07-22 PASS 56 seconds
- 2026-07-23

### Error 2026-07-23T00:48:44+00:00
```
2026-07-23T00:48:44.7267349Z === RUN   TestAccStreamConnectionFailover
2026-07-23T00:48:44.7267846Z     resource_test.go:37: Creating execution project (1): test-acc-tf-p-471148453876112443
2026-07-23T00:48:44.7268270Z     resource_test.go:37: 
2026-07-23T00:48:44.7269011Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:48:44.7270420Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:48:44.7271927Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:48:44.7273630Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/streamconnectionfailover/resource_test.go:37
2026-07-23T00:48:44.7274401Z         	Error:      	Received unexpected error:
2026-07-23T00:48:44.7276628Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:48:44.7277778Z         	Test:       	TestAccStreamConnectionFailover
2026-07-23T00:48:44.7279612Z         	Messages:   	Project creation failed: test-acc-tf-p-471148453876112443, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:48:44.7280817Z --- FAIL: TestAccStreamConnectionFailover (0.28s)
```

- 2026-07-24 PASS 51 seconds
- 2026-07-25 PASS 49 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 58 seconds
- 2026-07-28 PASS 49 seconds
- 2026-07-29 PASS 49 seconds
- 2026-07-30 PASS 52 seconds
- 2026-07-31 PASS 53 seconds
- 2026-08-01 PASS 50 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 50 seconds
- 2026-08-04 PASS 53 seconds
- 2026-08-05 PASS 51 seconds
- 2026-08-06 PASS 50 seconds
- 2026-08-07 PASS 54 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12: MISSING
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 57 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 52 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 56 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 52 seconds
  - PASS a minute
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 55 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
