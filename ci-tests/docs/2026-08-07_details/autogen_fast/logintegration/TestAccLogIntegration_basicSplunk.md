# autogen_fast/logintegration/TestAccLogIntegration_basicSplunk Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 28) FAIL(x 4)
Success rate: 87.50%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:57](#error-2026-07-09t0057030000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.10s
[2026-07-18 00:49](#error-2026-07-18t0049420000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 70.06s
[2026-07-21 00:53](#error-2026-07-21t0053060000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 66.07s
[2026-07-23 00:48](#error-2026-07-23t0048360000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.05s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:57:03+00:00
```
2026-07-09T00:57:03.9662026Z === RUN   TestAccLogIntegration_basicSplunk
2026-07-09T00:57:03.9662659Z     resource_test.go:269: Creating execution project (1): test-acc-tf-p-8374638623900067814
2026-07-09T00:57:03.9663211Z     resource_test.go:269: 
2026-07-09T00:57:03.9664169Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:57:03.9666023Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:57:03.9667865Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:57:03.9670066Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/logintegration/resource_test.go:269
2026-07-09T00:57:03.9670939Z         	Error:      	Received unexpected error:
2026-07-09T00:57:03.9672928Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:57:03.9674027Z         	Test:       	TestAccLogIntegration_basicSplunk
2026-07-09T00:57:03.9675995Z         	Messages:   	Project creation failed: test-acc-tf-p-8374638623900067814, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:57:03.9677355Z --- FAIL: TestAccLogIntegration_basicSplunk (62.96s)
```

- 2026-07-10 PASS 7 seconds
- 2026-07-11 PASS 8 seconds
- 2026-07-12: MISSING
- 2026-07-13 PASS 8 seconds
- 2026-07-14 PASS 8 seconds
- 2026-07-15 PASS 7 seconds
- 2026-07-16 PASS 7 seconds
- 2026-07-17 PASS 9 seconds
- 2026-07-18

### Error 2026-07-18T00:49:42+00:00
```
2026-07-18T00:49:42.9120360Z === RUN   TestAccLogIntegration_basicSplunk
2026-07-18T00:49:42.9121023Z     resource_test.go:269: Creating execution project (1): test-acc-tf-p-2504767227637832573
2026-07-18T00:49:42.9121639Z     resource_test.go:269: 
2026-07-18T00:49:42.9122669Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T00:49:42.9124399Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-18T00:49:42.9126315Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-18T00:49:42.9128178Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/logintegration/resource_test.go:269
2026-07-18T00:49:42.9129096Z         	Error:      	Received unexpected error:
2026-07-18T00:49:42.9130982Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:49:42.9132060Z         	Test:       	TestAccLogIntegration_basicSplunk
2026-07-18T00:49:42.9133813Z         	Messages:   	Project creation failed: test-acc-tf-p-2504767227637832573, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:49:42.9135318Z --- FAIL: TestAccLogIntegration_basicSplunk (70.59s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:06+00:00
```
2026-07-21T00:53:06.0002248Z === RUN   TestAccLogIntegration_basicSplunk
2026-07-21T00:53:06.0002899Z     resource_test.go:269: Creating execution project (1): test-acc-tf-p-5845476280688437833
2026-07-21T00:53:06.0003472Z     resource_test.go:269: 
2026-07-21T00:53:06.0004583Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:53:06.0006671Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:53:06.0008561Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:53:06.0010542Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/logintegration/resource_test.go:269
2026-07-21T00:53:06.0011420Z         	Error:      	Received unexpected error:
2026-07-21T00:53:06.0013474Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:53:06.0014617Z         	Test:       	TestAccLogIntegration_basicSplunk
2026-07-21T00:53:06.0016667Z         	Messages:   	Project creation failed: test-acc-tf-p-5845476280688437833, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:53:06.0017921Z --- FAIL: TestAccLogIntegration_basicSplunk (66.74s)
```

- 2026-07-22 PASS 7 seconds
- 2026-07-23

### Error 2026-07-23T00:48:36+00:00
```
2026-07-23T00:48:36.9161968Z === RUN   TestAccLogIntegration_basicSplunk
2026-07-23T00:48:36.9162470Z     resource_test.go:269: Creating execution project (1): test-acc-tf-p-2959374925069635456
2026-07-23T00:48:36.9162994Z     resource_test.go:269: 
2026-07-23T00:48:36.9163765Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:48:36.9165203Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:48:36.9166643Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:48:36.9168164Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/logintegration/resource_test.go:269
2026-07-23T00:48:36.9168843Z         	Error:      	Received unexpected error:
2026-07-23T00:48:36.9171083Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:48:36.9172181Z         	Test:       	TestAccLogIntegration_basicSplunk
2026-07-23T00:48:36.9174117Z         	Messages:   	Project creation failed: test-acc-tf-p-2959374925069635456, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:48:36.9175341Z --- FAIL: TestAccLogIntegration_basicSplunk (0.50s)
```

- 2026-07-24 PASS 7 seconds
- 2026-07-25 PASS 7 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 11 seconds
- 2026-07-28 PASS 7 seconds
- 2026-07-29 PASS 6 seconds
- 2026-07-30 PASS 7 seconds
- 2026-07-31 PASS 6 seconds
- 2026-08-01 PASS 7 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 7 seconds
- 2026-08-04 PASS 6 seconds
- 2026-08-05 PASS 7 seconds
- 2026-08-06 PASS 7 seconds
- 2026-08-07 PASS 7 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 9 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 8 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 8 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 8 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 8 seconds
  - PASS 9 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 9 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
