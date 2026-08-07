# autogen_fast/auditingapi/TestAccAuditingAPI_basic Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 25) FAIL(x 7)
Success rate: 78.12%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:53](#error-2026-07-09t0053050000) |  | dev | flaky_500 | 39.00s
[2026-07-11 00:54](#error-2026-07-11t0054310000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 81.05s
[2026-07-14 00:45](#error-2026-07-14t0045270000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.01s
[2026-07-16 00:48](#error-2026-07-16t0048430000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 85.05s
[2026-07-18 00:42](#error-2026-07-18t0042570000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 89.01s
[2026-07-21 00:52](#error-2026-07-21t0052270000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 66.09s
[2026-07-23 00:48](#error-2026-07-23t0048360000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.04s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:53:05+00:00
```
2026-07-09T00:53:05.5010298Z === RUN   TestAccAuditingAPI_basic
2026-07-09T00:53:05.5011366Z     resource_test.go:17: Creating execution project (1): test-acc-tf-p-2037441897151738217
2026-07-09T00:53:05.5012311Z     resource_test.go:17: 
2026-07-09T00:53:05.5014036Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:53:05.5017627Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:53:05.5021247Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:53:05.5024816Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/auditingapi/resource_test.go:17
2026-07-09T00:53:05.5026356Z         	Error:      	Received unexpected error:
2026-07-09T00:53:05.5028164Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2026-07-09T00:53:05.5029454Z         	Test:       	TestAccAuditingAPI_basic
2026-07-09T00:53:05.5031485Z         	Messages:   	Project creation failed: test-acc-tf-p-2037441897151738217, err: (503 Service Unavailable) failed to decode response body: undefined response type
2026-07-09T00:53:05.5033386Z --- FAIL: TestAccAuditingAPI_basic (39.03s)
```

- 2026-07-10 PASS 7 seconds
- 2026-07-11

### Error 2026-07-11T00:54:31+00:00
```
2026-07-11T00:54:31.1453609Z === RUN   TestAccAuditingAPI_basic
2026-07-11T00:54:31.1454411Z     resource_test.go:17: Creating execution project (1): test-acc-tf-p-1453729296422020990
2026-07-11T00:54:31.1454967Z     resource_test.go:17: 
2026-07-11T00:54:31.1456373Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:54:31.1458588Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:54:31.1460863Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:54:31.1463202Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/auditingapi/resource_test.go:17
2026-07-11T00:54:31.1464504Z         	Error:      	Received unexpected error:
2026-07-11T00:54:31.1466872Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:54:31.1467971Z         	Test:       	TestAccAuditingAPI_basic
2026-07-11T00:54:31.1470170Z         	Messages:   	Project creation failed: test-acc-tf-p-1453729296422020990, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:54:31.1471605Z --- FAIL: TestAccAuditingAPI_basic (81.52s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 4 seconds
- 2026-07-14

### Error 2026-07-14T00:45:27+00:00
```
2026-07-14T00:45:27.4110271Z === RUN   TestAccAuditingAPI_basic
2026-07-14T00:45:27.4111842Z     resource_test.go:17: Creating execution project (1): test-acc-tf-p-3100110916454940828
2026-07-14T00:45:27.4113278Z     resource_test.go:17: 
2026-07-14T00:45:27.4115555Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-14T00:45:27.4126161Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-14T00:45:27.4130961Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-14T00:45:27.4134966Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/auditingapi/resource_test.go:17
2026-07-14T00:45:27.4136760Z         	Error:      	Received unexpected error:
2026-07-14T00:45:27.4141067Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-14T00:45:27.4143496Z         	Test:       	TestAccAuditingAPI_basic
2026-07-14T00:45:27.4147763Z         	Messages:   	Project creation failed: test-acc-tf-p-3100110916454940828, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-14T00:45:27.4150448Z --- FAIL: TestAccAuditingAPI_basic (62.05s)
```

- 2026-07-15 PASS 5 seconds
- 2026-07-16

### Error 2026-07-16T00:48:43+00:00
```
2026-07-16T00:48:43.0579260Z === RUN   TestAccAuditingAPI_basic
2026-07-16T00:48:43.0580033Z     resource_test.go:17: Creating execution project (1): test-acc-tf-p-4437429147501057732
2026-07-16T00:48:43.0581164Z     resource_test.go:17: 
2026-07-16T00:48:43.0582539Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-16T00:48:43.0584361Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-16T00:48:43.0586262Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-16T00:48:43.0588124Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/auditingapi/resource_test.go:17
2026-07-16T00:48:43.0589023Z         	Error:      	Received unexpected error:
2026-07-16T00:48:43.0590957Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T00:48:43.0592285Z         	Test:       	TestAccAuditingAPI_basic
2026-07-16T00:48:43.0594017Z         	Messages:   	Project creation failed: test-acc-tf-p-4437429147501057732, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T00:48:43.0595656Z --- FAIL: TestAccAuditingAPI_basic (85.45s)
```

- 2026-07-17 PASS 7 seconds
- 2026-07-18

### Error 2026-07-18T00:42:57+00:00
```
2026-07-18T00:42:57.0673574Z === RUN   TestAccAuditingAPI_basic
2026-07-18T00:42:57.0674732Z     resource_test.go:17: Creating execution project (1): test-acc-tf-p-4945005933134781342
2026-07-18T00:42:57.0675794Z     resource_test.go:17: 
2026-07-18T00:42:57.0677237Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T00:42:57.0679824Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-18T00:42:57.0682426Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-18T00:42:57.0685854Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/auditingapi/resource_test.go:17
2026-07-18T00:42:57.0687223Z         	Error:      	Received unexpected error:
2026-07-18T00:42:57.0689914Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:42:57.0691510Z         	Test:       	TestAccAuditingAPI_basic
2026-07-18T00:42:57.0694164Z         	Messages:   	Project creation failed: test-acc-tf-p-4945005933134781342, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:42:57.0696321Z --- FAIL: TestAccAuditingAPI_basic (89.10s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:52:27+00:00
```
2026-07-21T00:52:27.2311387Z === RUN   TestAccAuditingAPI_basic
2026-07-21T00:52:27.2312033Z     resource_test.go:17: Creating execution project (1): test-acc-tf-p-3554146625818409194
2026-07-21T00:52:27.2312596Z     resource_test.go:17: 
2026-07-21T00:52:27.2313583Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:52:27.2315539Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:52:27.2317400Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:52:27.2319307Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/auditingapi/resource_test.go:17
2026-07-21T00:52:27.2320178Z         	Error:      	Received unexpected error:
2026-07-21T00:52:27.2322181Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:52:27.2323228Z         	Test:       	TestAccAuditingAPI_basic
2026-07-21T00:52:27.2325095Z         	Messages:   	Project creation failed: test-acc-tf-p-3554146625818409194, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:52:27.2326292Z --- FAIL: TestAccAuditingAPI_basic (66.87s)
```

- 2026-07-22 PASS 7 seconds
- 2026-07-23

### Error 2026-07-23T00:48:36+00:00
```
2026-07-23T00:48:36.9054209Z === RUN   TestAccAuditingAPI_basic
2026-07-23T00:48:36.9054707Z     resource_test.go:17: Creating execution project (1): test-acc-tf-p-6648491899602519417
2026-07-23T00:48:36.9055150Z     resource_test.go:17: 
2026-07-23T00:48:36.9055906Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:48:36.9057353Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:48:36.9058804Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:48:36.9060296Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/auditingapi/resource_test.go:17
2026-07-23T00:48:36.9060962Z         	Error:      	Received unexpected error:
2026-07-23T00:48:36.9062664Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:48:36.9063488Z         	Test:       	TestAccAuditingAPI_basic
2026-07-23T00:48:36.9064892Z         	Messages:   	Project creation failed: test-acc-tf-p-6648491899602519417, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:48:36.9065813Z --- FAIL: TestAccAuditingAPI_basic (61.42s)
```

- 2026-07-24 PASS 7 seconds
- 2026-07-25 PASS 4 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 11 seconds
- 2026-07-28 PASS 9 seconds
- 2026-07-29 PASS 5 seconds
- 2026-07-30 PASS 5 seconds
- 2026-07-31 PASS 6 seconds
- 2026-08-01 PASS 6 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 4 seconds
- 2026-08-04 PASS 7 seconds
- 2026-08-05 PASS 8 seconds
- 2026-08-06 PASS 8 seconds
- 2026-08-07 PASS 6 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 6 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 6 seconds
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
- 2026-07-26 PASS 7 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 4 seconds
  - PASS 5 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 6 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
