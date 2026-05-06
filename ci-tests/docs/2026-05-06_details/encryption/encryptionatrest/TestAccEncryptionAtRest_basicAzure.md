# encryption/encryptionatrest/TestAccEncryptionAtRest_basicAzure Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 32) FAIL(x 2)
Success rate: 94.12%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-30 00:57](#error-2026-04-30t0057120000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.07s
[2026-05-05 00:53](#error-2026-05-05t0053500000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 69.01s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 48 seconds
- 2026-04-08 PASS 6 seconds
- 2026-04-09 PASS 11 seconds
- 2026-04-10 PASS 19 seconds
- 2026-04-11 PASS 16 seconds
- 2026-04-12: MISSING
- 2026-04-13 PASS 8 seconds
- 2026-04-14 PASS 12 seconds
- 2026-04-15 PASS 5 seconds
- 2026-04-16 PASS 8 seconds
- 2026-04-17 PASS 7 seconds
- 2026-04-18 PASS 10 seconds
- 2026-04-19: MISSING
- 2026-04-20 PASS 6 seconds
- 2026-04-21 PASS 13 seconds
- 2026-04-22 PASS 8 seconds
- 2026-04-23 PASS 8 seconds
- 2026-04-24 PASS 8 seconds
- 2026-04-25 PASS 37 seconds
- 2026-04-26: MISSING
- 2026-04-27 PASS 5 seconds
- 2026-04-28 PASS 23 seconds
- 2026-04-29 PASS 7 seconds
- 2026-04-30

### Error 2026-04-30T00:57:12+00:00
```
2026-04-30T00:57:12.0259267Z === RUN   TestAccEncryptionAtRest_basicAzure
2026-04-30T00:57:12.0260003Z     resource_test.go:89: Creating execution project (1): test-acc-tf-p-8726611316525029097
2026-04-30T00:57:12.0260529Z     resource_test.go:89: 
2026-04-30T00:57:12.0261265Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-30T00:57:12.0262954Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-30T00:57:12.0264352Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-30T00:57:12.0265841Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrest/resource_test.go:89
2026-04-30T00:57:12.0266690Z         	Error:      	Received unexpected error:
2026-04-30T00:57:12.0268235Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T00:57:12.0269039Z         	Test:       	TestAccEncryptionAtRest_basicAzure
2026-04-30T00:57:12.0270401Z         	Messages:   	Project creation failed: test-acc-tf-p-8726611316525029097, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T00:57:12.0271291Z --- FAIL: TestAccEncryptionAtRest_basicAzure (63.66s)
```

- 2026-05-01 PASS 11 seconds
- 2026-05-02 PASS 7 seconds
- 2026-05-03: MISSING
- 2026-05-04 PASS 5 seconds
- 2026-05-05

### Error 2026-05-05T00:53:50+00:00
```
2026-05-05T00:53:50.5554330Z === RUN   TestAccEncryptionAtRest_basicAzure
2026-05-05T00:53:50.5555315Z     resource_test.go:89: Creating execution project (1): test-acc-tf-p-7309113031202170842
2026-05-05T00:53:50.5556505Z     resource_test.go:89: 
2026-05-05T00:53:50.5557479Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-05T00:53:50.5560524Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-05T00:53:50.5562439Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-05T00:53:50.5564725Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrest/resource_test.go:89
2026-05-05T00:53:50.5565574Z         	Error:      	Received unexpected error:
2026-05-05T00:53:50.5567587Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-05T00:53:50.5568682Z         	Test:       	TestAccEncryptionAtRest_basicAzure
2026-05-05T00:53:50.5570545Z         	Messages:   	Project creation failed: test-acc-tf-p-7309113031202170842, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-05T00:53:50.5574088Z --- FAIL: TestAccEncryptionAtRest_basicAzure (69.10s)
```

- 2026-05-06 PASS 7 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 6 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 6 seconds
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 5 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 4 seconds
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 6 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 4 seconds
- 2026-05-04 PASS 6 seconds
- 2026-05-05: MISSING
- 2026-05-06 PASS 5 seconds
