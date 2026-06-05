# encryption/encryptionatrest/TestAccEncryptionAtRest_basicAzure Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 25) FAIL(x 5)
Success rate: 83.33%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 00:57](#error-2026-05-09t0057340000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 80.07s
[2026-05-16 00:57](#error-2026-05-16t0057030000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 94.05s
[2026-05-23 01:01](#error-2026-05-23t0101360000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 70.08s
[2026-05-28 00:59](#error-2026-05-28t0059510000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 106.03s
[2026-05-30 01:02](#error-2026-05-30t0102520000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 84.09s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 7 seconds
- 2026-05-08 PASS 6 seconds
- 2026-05-09

### Error 2026-05-09T00:57:34+00:00
```
2026-05-09T00:57:34.2883170Z === RUN   TestAccEncryptionAtRest_basicAzure
2026-05-09T00:57:34.2883784Z     resource_test.go:89: Creating execution project (1): test-acc-tf-p-2478633339416038694
2026-05-09T00:57:34.2884308Z     resource_test.go:89: 
2026-05-09T00:57:34.2885518Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T00:57:34.2887350Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T00:57:34.2889425Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T00:57:34.2891354Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrest/resource_test.go:89
2026-05-09T00:57:34.2892191Z         	Error:      	Received unexpected error:
2026-05-09T00:57:34.2894182Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T00:57:34.2895258Z         	Test:       	TestAccEncryptionAtRest_basicAzure
2026-05-09T00:57:34.2897052Z         	Messages:   	Project creation failed: test-acc-tf-p-2478633339416038694, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T00:57:34.2898524Z --- FAIL: TestAccEncryptionAtRest_basicAzure (80.71s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 7 seconds
- 2026-05-12 PASS 10 seconds
- 2026-05-13 PASS 15 seconds
- 2026-05-14 PASS 9 seconds
- 2026-05-15 PASS 5 seconds
- 2026-05-16

### Error 2026-05-16T00:57:03+00:00
```
2026-05-16T00:57:03.6342430Z === RUN   TestAccEncryptionAtRest_basicAzure
2026-05-16T00:57:03.6343007Z     resource_test.go:89: Creating execution project (1): test-acc-tf-p-1501554803940184271
2026-05-16T00:57:03.6343505Z     resource_test.go:89: 
2026-05-16T00:57:03.6344376Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-16T00:57:03.6346085Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-16T00:57:03.6347792Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-16T00:57:03.6349762Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrest/resource_test.go:89
2026-05-16T00:57:03.6350562Z         	Error:      	Received unexpected error:
2026-05-16T00:57:03.6352371Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T00:57:03.6353369Z         	Test:       	TestAccEncryptionAtRest_basicAzure
2026-05-16T00:57:03.6355135Z         	Messages:   	Project creation failed: test-acc-tf-p-1501554803940184271, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T00:57:03.6356335Z --- FAIL: TestAccEncryptionAtRest_basicAzure (94.54s)
```

- 2026-05-17: MISSING
- 2026-05-18 PASS 8 seconds
- 2026-05-19 PASS 11 seconds
- 2026-05-20 PASS 7 seconds
- 2026-05-21 PASS 13 seconds
- 2026-05-22 PASS 5 seconds
- 2026-05-23

### Error 2026-05-23T01:01:36+00:00
```
2026-05-23T01:01:36.2184407Z === RUN   TestAccEncryptionAtRest_basicAzure
2026-05-23T01:01:36.2185013Z     resource_test.go:89: Creating execution project (1): test-acc-tf-p-8459967171135866873
2026-05-23T01:01:36.2185531Z     resource_test.go:89: 
2026-05-23T01:01:36.2186645Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-23T01:01:36.2188812Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-23T01:01:36.2191072Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-23T01:01:36.2193097Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrest/resource_test.go:89
2026-05-23T01:01:36.2193956Z         	Error:      	Received unexpected error:
2026-05-23T01:01:36.2195974Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:01:36.2197076Z         	Test:       	TestAccEncryptionAtRest_basicAzure
2026-05-23T01:01:36.2199085Z         	Messages:   	Project creation failed: test-acc-tf-p-8459967171135866873, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:01:36.2200357Z --- FAIL: TestAccEncryptionAtRest_basicAzure (70.80s)
```

- 2026-05-24: MISSING
- 2026-05-25 PASS 5 seconds
- 2026-05-26 PASS a minute
- 2026-05-27 PASS 6 seconds
- 2026-05-28

### Error 2026-05-28T00:59:51+00:00
```
2026-05-28T00:59:51.2754037Z === RUN   TestAccEncryptionAtRest_basicAzure
2026-05-28T00:59:51.2754527Z     resource_test.go:89: Creating execution project (1): test-acc-tf-p-2169532207926685565
2026-05-28T00:59:51.2754945Z     resource_test.go:89: 
2026-05-28T00:59:51.2755870Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T00:59:51.2757356Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T00:59:51.2758812Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T00:59:51.2760390Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrest/resource_test.go:89
2026-05-28T00:59:51.2761054Z         	Error:      	Received unexpected error:
2026-05-28T00:59:51.2762611Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T00:59:51.2763456Z         	Test:       	TestAccEncryptionAtRest_basicAzure
2026-05-28T00:59:51.2764992Z         	Messages:   	Project creation failed: test-acc-tf-p-2169532207926685565, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T00:59:51.2766095Z --- FAIL: TestAccEncryptionAtRest_basicAzure (106.26s)
```

- 2026-05-29 PASS 6 seconds
- 2026-05-30

### Error 2026-05-30T01:02:52+00:00
```
2026-05-30T01:02:52.6555760Z === RUN   TestAccEncryptionAtRest_basicAzure
2026-05-30T01:02:52.6556894Z     resource_test.go:89: Creating execution project (1): test-acc-tf-p-4770803702954457720
2026-05-30T01:02:52.6558774Z     resource_test.go:89: 
2026-05-30T01:02:52.6559826Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T01:02:52.6563424Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-30T01:02:52.6565482Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-30T01:02:52.6567475Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrest/resource_test.go:89
2026-05-30T01:02:52.6568340Z         	Error:      	Received unexpected error:
2026-05-30T01:02:52.6570366Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:02:52.6571894Z         	Test:       	TestAccEncryptionAtRest_basicAzure
2026-05-30T01:02:52.6574041Z         	Messages:   	Project creation failed: test-acc-tf-p-4770803702954457720, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:02:52.6575357Z --- FAIL: TestAccEncryptionAtRest_basicAzure (84.87s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 8 seconds
- 2026-06-02 PASS 12 seconds
- 2026-06-03 PASS 7 seconds
- 2026-06-04 PASS 8 seconds
- 2026-06-05 PASS 6 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 5 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 10 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 7 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 8 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
