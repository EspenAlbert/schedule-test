# encryption/encryptionatrest/TestAccEncryptionAtRest_basicAzure Test Details
# Found 31 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 27) FAIL(x 4)
Success rate: 87.10%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-11 00:45](#error-2026-07-11t0045300000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.09s
[2026-07-16 00:44](#error-2026-07-16t0044510000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.03s
[2026-07-18 00:44](#error-2026-07-18t0044020000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 101.08s
[2026-07-23 00:47](#error-2026-07-23t0047280000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.05s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09 PASS 35 seconds
- 2026-07-10 PASS 6 seconds
- 2026-07-11

### Error 2026-07-11T00:45:30+00:00
```
2026-07-11T00:45:30.8337322Z === RUN   TestAccEncryptionAtRest_basicAzure
2026-07-11T00:45:30.8338255Z     resource_test.go:89: Creating execution project (1): test-acc-tf-p-7262149185539049426
2026-07-11T00:45:30.8338801Z     resource_test.go:89: 
2026-07-11T00:45:30.8339763Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:45:30.8341939Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:45:30.8343772Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:45:30.8345694Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrest/resource_test.go:89
2026-07-11T00:45:30.8346533Z         	Error:      	Received unexpected error:
2026-07-11T00:45:30.8348864Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:45:30.8349941Z         	Test:       	TestAccEncryptionAtRest_basicAzure
2026-07-11T00:45:30.8351903Z         	Messages:   	Project creation failed: test-acc-tf-p-7262149185539049426, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:45:30.8353112Z --- FAIL: TestAccEncryptionAtRest_basicAzure (61.92s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 6 seconds
- 2026-07-14: MISSING
- 2026-07-15 PASS 8 seconds
- 2026-07-16

### Error 2026-07-16T00:44:51+00:00
```
2026-07-16T00:44:51.0769278Z === RUN   TestAccEncryptionAtRest_basicAzure
2026-07-16T00:44:51.0770495Z     resource_test.go:89: Creating execution project (1): test-acc-tf-p-8593991804520292489
2026-07-16T00:44:51.0772304Z     resource_test.go:89: 
2026-07-16T00:44:51.0774208Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-16T00:44:51.0777953Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-16T00:44:51.0781841Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-16T00:44:51.0785458Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrest/resource_test.go:89
2026-07-16T00:44:51.0787698Z         	Error:      	Received unexpected error:
2026-07-16T00:44:51.0790089Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T00:44:51.0791507Z         	Test:       	TestAccEncryptionAtRest_basicAzure
2026-07-16T00:44:51.0794910Z         	Messages:   	Project creation failed: test-acc-tf-p-8593991804520292489, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T00:44:51.0796710Z --- FAIL: TestAccEncryptionAtRest_basicAzure (61.33s)
```

- 2026-07-17 PASS 12 seconds
- 2026-07-18

### Error 2026-07-18T00:44:02+00:00
```
2026-07-18T00:44:02.7830332Z === RUN   TestAccEncryptionAtRest_basicAzure
2026-07-18T00:44:02.7831317Z     resource_test.go:89: Creating execution project (1): test-acc-tf-p-6867307318034145045
2026-07-18T00:44:02.7832311Z     resource_test.go:89: 
2026-07-18T00:44:02.7833876Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T00:44:02.7836978Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-18T00:44:02.7840067Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-18T00:44:02.7843442Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrest/resource_test.go:89
2026-07-18T00:44:02.7844851Z         	Error:      	Received unexpected error:
2026-07-18T00:44:02.7848218Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:44:02.7849947Z         	Test:       	TestAccEncryptionAtRest_basicAzure
2026-07-18T00:44:02.7853326Z         	Messages:   	Project creation failed: test-acc-tf-p-6867307318034145045, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:44:02.7855288Z --- FAIL: TestAccEncryptionAtRest_basicAzure (101.82s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21 PASS 15 seconds
- 2026-07-22 PASS 5 seconds
- 2026-07-23

### Error 2026-07-23T00:47:28+00:00
```
2026-07-23T00:47:28.6762966Z === RUN   TestAccEncryptionAtRest_basicAzure
2026-07-23T00:47:28.6763699Z     resource_test.go:89: Creating execution project (1): test-acc-tf-p-7721428011714778100
2026-07-23T00:47:28.6764250Z     resource_test.go:89: 
2026-07-23T00:47:28.6765207Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:47:28.6767138Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:47:28.6769389Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:47:28.6771356Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrest/resource_test.go:89
2026-07-23T00:47:28.6772226Z         	Error:      	Received unexpected error:
2026-07-23T00:47:28.6774218Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:47:28.6775335Z         	Test:       	TestAccEncryptionAtRest_basicAzure
2026-07-23T00:47:28.6777380Z         	Messages:   	Project creation failed: test-acc-tf-p-7721428011714778100, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:47:28.6778975Z --- FAIL: TestAccEncryptionAtRest_basicAzure (63.52s)
```

- 2026-07-24 PASS 7 seconds
- 2026-07-25 PASS 4 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 8 seconds
- 2026-07-28 PASS 4 seconds
- 2026-07-29 PASS 7 seconds
- 2026-07-30 PASS 5 seconds
- 2026-07-31 PASS 7 seconds
- 2026-08-01 PASS 4 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 4 seconds
- 2026-08-04 PASS 4 seconds
- 2026-08-05 PASS 10 seconds
- 2026-08-06 PASS 5 seconds
- 2026-08-07 PASS 6 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 5 seconds
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
- 2026-07-26 PASS 4 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 4 seconds
  - PASS 6 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 4 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
