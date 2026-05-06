# push_based_log_export/pushbasedlogexport/TestAccPushBasedLogExport_noPrefixPath Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 30) FAIL(x 4)
Success rate: 88.24%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-09 00:39](#error-2026-04-09t0039160000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 84.09s
[2026-04-11 00:44](#error-2026-04-11t0044100000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 105.01s
[2026-04-23 00:53](#error-2026-04-23t0053300000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/69e96ce82d49a6262d6b591e/cloudProviderAccess/69e96d929f2fb283559722fe | dev |  | 24.08s
[2026-04-30 00:56](#error-2026-04-30t0056160000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 66.03s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS a minute
- 2026-04-08 PASS 51 seconds
- 2026-04-09

### Error 2026-04-09T00:39:16+00:00
```
2026-04-09T00:39:16.3209615Z === RUN   TestAccPushBasedLogExport_noPrefixPath
2026-04-09T00:39:16.3210271Z     resource_test.go:68: Creating execution project (1): test-acc-tf-p-5541173894646974433
2026-04-09T00:40:41.2022395Z     resource_test.go:68: 
2026-04-09T00:40:41.2025984Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-09T00:40:41.2031835Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-09T00:40:41.2033903Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-09T00:40:41.2036578Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:75
2026-04-09T00:40:41.2038889Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:68
2026-04-09T00:40:41.2040338Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-04-09T00:40:41.2040860Z         	Error:      	Received unexpected error:
2026-04-09T00:40:41.2043227Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T00:40:41.2044565Z         	Test:       	TestAccPushBasedLogExport_noPrefixPath
2026-04-09T00:40:41.2046388Z         	Messages:   	Project creation failed: test-acc-tf-p-5541173894646974433, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T00:40:41.2047612Z --- FAIL: TestAccPushBasedLogExport_noPrefixPath (84.88s)
```

- 2026-04-10 PASS 55 seconds
- 2026-04-11

### Error 2026-04-11T00:44:10+00:00
```
2026-04-11T00:44:10.4127100Z === RUN   TestAccPushBasedLogExport_noPrefixPath
2026-04-11T00:44:10.4127672Z     resource_test.go:68: Creating execution project (1): test-acc-tf-p-3571689879727761892
2026-04-11T00:45:55.5382460Z     resource_test.go:68: 
2026-04-11T00:45:55.5388470Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-11T00:45:55.5393640Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-11T00:45:55.5395490Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-11T00:45:55.5397724Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:75
2026-04-11T00:45:55.5400291Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:68
2026-04-11T00:45:55.5401716Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-04-11T00:45:55.5425841Z         	Error:      	Received unexpected error:
2026-04-11T00:45:55.5429273Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:45:55.5431453Z         	Test:       	TestAccPushBasedLogExport_noPrefixPath
2026-04-11T00:45:55.5434714Z         	Messages:   	Project creation failed: test-acc-tf-p-3571689879727761892, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:45:55.5436866Z --- FAIL: TestAccPushBasedLogExport_noPrefixPath (105.13s)
```

- 2026-04-12: MISSING
- 2026-04-13 PASS 56 seconds
- 2026-04-14 PASS 51 seconds
- 2026-04-15 PASS 51 seconds
- 2026-04-16 PASS a minute
- 2026-04-17 PASS 52 seconds
- 2026-04-18 PASS 52 seconds
- 2026-04-19: MISSING
- 2026-04-20 PASS 56 seconds
- 2026-04-21 PASS a minute
- 2026-04-22 PASS 52 seconds
- 2026-04-23

### Error 2026-04-23T00:53:30+00:00
```
2026-04-23T00:53:30.4724620Z === RUN   TestAccPushBasedLogExport_noPrefixPath
2026-04-23T00:53:39.7937032Z 2026/04/23 00:53:39 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e96ce82d49a6262d6b591e/cloudProviderAccess/69e96d929f2fb283559722fe PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-6302858775031720724-policy). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-6302858775031720724-policy], BadRequestDetail:  
2026-04-23T00:53:39.7939202Z 2026/04/23 00:53:39 retrying
2026-04-23T00:53:50.1487337Z   
2026-04-23T00:53:50.1490361Z     resource_test.go:68: Step 1/1 error: Error running apply: exit status 1
2026-04-23T00:53:50.1490937Z         
2026-04-23T00:53:50.1492068Z         Error: creating Amazon S3 (Simple Storage) Bucket (mongodb-atlas-tf-vq9y2qr8qk-1): RequestError: send request failed
2026-04-23T00:53:50.1494063Z         caused by: Put "https://mongodb-atlas-tf-vq9y2qr8qk-1.s3.amazonaws.com/": read tcp 10.1.0.116:52732->52.217.69.148:443: read: connection reset by peer
2026-04-23T00:53:50.1495213Z         
2026-04-23T00:53:50.1495585Z           with aws_s3_bucket.log_bucket_1,
2026-04-23T00:53:50.1496314Z           on terraform_plugin_test.tf line 106, in resource "aws_s3_bucket" "log_bucket_1":
2026-04-23T00:53:50.1497040Z          106: resource "aws_s3_bucket" "log_bucket_1" {
2026-04-23T00:53:50.1497448Z         
2026-04-23T00:53:55.2618641Z --- FAIL: TestAccPushBasedLogExport_noPrefixPath (24.79s)
```

- 2026-04-24 PASS 53 seconds
- 2026-04-25 PASS 52 seconds
- 2026-04-26: MISSING
- 2026-04-27 PASS 50 seconds
- 2026-04-28 PASS 52 seconds
- 2026-04-29 PASS 56 seconds
- 2026-04-30

### Error 2026-04-30T00:56:16+00:00
```
2026-04-30T00:56:16.8865505Z === RUN   TestAccPushBasedLogExport_noPrefixPath
2026-04-30T00:56:16.8866157Z     resource_test.go:68: Creating execution project (1): test-acc-tf-p-2121839556427255430
2026-04-30T00:57:23.2018937Z     resource_test.go:68: 
2026-04-30T00:57:23.2022420Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-30T00:57:23.2026587Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-30T00:57:23.2028938Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-30T00:57:23.2031024Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:75
2026-04-30T00:57:23.2033401Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:68
2026-04-30T00:57:23.2035054Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-04-30T00:57:23.2035782Z         	Error:      	Received unexpected error:
2026-04-30T00:57:23.2038152Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T00:57:23.2044283Z         	Test:       	TestAccPushBasedLogExport_noPrefixPath
2026-04-30T00:57:23.2049536Z         	Messages:   	Project creation failed: test-acc-tf-p-2121839556427255430, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T00:57:23.2051369Z --- FAIL: TestAccPushBasedLogExport_noPrefixPath (66.32s)
```

- 2026-05-01 PASS 50 seconds
- 2026-05-02 PASS a minute
- 2026-05-03: MISSING
- 2026-05-04 PASS 55 seconds
- 2026-05-05 PASS 2 minutes
- 2026-05-06 PASS 53 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 55 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 55 seconds
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 50 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 55 seconds
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 53 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 54 seconds
- 2026-05-04 PASS 51 seconds
- 2026-05-05: MISSING
- 2026-05-06 PASS 51 seconds
