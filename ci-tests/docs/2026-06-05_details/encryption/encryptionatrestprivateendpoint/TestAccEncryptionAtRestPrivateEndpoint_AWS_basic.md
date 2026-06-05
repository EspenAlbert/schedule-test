# encryption/encryptionatrestprivateendpoint/TestAccEncryptionAtRestPrivateEndpoint_AWS_basic Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 25) FAIL(x 5)
Success rate: 83.33%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-19 01:03](#error-2026-05-19t0103050000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 67.02s
[2026-05-23 01:01](#error-2026-05-23t0101360000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.04s
[2026-05-26 02:10](#error-2026-05-26t0210500000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 71.08s
[2026-05-30 01:02](#error-2026-05-30t0102520000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.07s
[2026-06-02 01:09](#error-2026-06-02t0109460000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 71.01s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 5 minutes
- 2026-05-08 PASS 7 minutes
- 2026-05-09 PASS 8 minutes
- 2026-05-10: MISSING
- 2026-05-11 PASS 7 minutes
- 2026-05-12 PASS 6 minutes
- 2026-05-13 PASS 6 minutes
- 2026-05-14 PASS 6 minutes
- 2026-05-15 PASS 5 minutes
- 2026-05-16 PASS 6 minutes
- 2026-05-17: MISSING
- 2026-05-18 PASS 11 minutes
- 2026-05-19

### Error 2026-05-19T01:03:05+00:00
```
2026-05-19T01:03:05.9379182Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_AWS_basic
2026-05-19T01:03:05.9380196Z     resource_test.go:174: Creating execution project (1): test-acc-tf-p-5766437021867199482
2026-05-19T01:03:05.9381007Z     resource_test.go:174: 
2026-05-19T01:03:05.9382532Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-19T01:03:05.9385457Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-19T01:03:05.9388551Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-19T01:03:05.9392255Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrestprivateendpoint/resource_test.go:180
2026-05-19T01:03:05.9395991Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrestprivateendpoint/resource_test.go:174
2026-05-19T01:03:05.9398147Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-19T01:03:05.9399153Z         	Error:      	Received unexpected error:
2026-05-19T01:03:05.9402527Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:03:05.9404338Z         	Test:       	TestAccEncryptionAtRestPrivateEndpoint_AWS_basic
2026-05-19T01:03:05.9407367Z         	Messages:   	Project creation failed: test-acc-tf-p-5766437021867199482, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:03:05.9409731Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_AWS_basic (67.19s)
```

- 2026-05-20 PASS 6 minutes
- 2026-05-21 PASS 6 minutes
- 2026-05-22 PASS 5 minutes
- 2026-05-23

### Error 2026-05-23T01:01:36+00:00
```
2026-05-23T01:01:36.2228476Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_AWS_basic
2026-05-23T01:01:36.2229106Z     resource_test.go:174: Creating execution project (1): test-acc-tf-p-871243381990228820
2026-05-23T01:01:36.2229613Z     resource_test.go:174: 
2026-05-23T01:01:36.2230840Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-23T01:01:36.2233247Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-23T01:01:36.2235134Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-23T01:01:36.2237268Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrestprivateendpoint/resource_test.go:180
2026-05-23T01:01:36.2239503Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrestprivateendpoint/resource_test.go:174
2026-05-23T01:01:36.2241055Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-23T01:01:36.2241629Z         	Error:      	Received unexpected error:
2026-05-23T01:01:36.2243636Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:01:36.2244813Z         	Test:       	TestAccEncryptionAtRestPrivateEndpoint_AWS_basic
2026-05-23T01:01:36.2246714Z         	Messages:   	Project creation failed: test-acc-tf-p-871243381990228820, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:01:36.2248037Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_AWS_basic (68.37s)
```

- 2026-05-24: MISSING
- 2026-05-25 PASS 5 minutes
- 2026-05-26

### Error 2026-05-26T02:10:50+00:00
```
2026-05-26T02:10:50.2720245Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_AWS_basic
2026-05-26T02:10:50.2720912Z     resource_test.go:174: Creating execution project (1): test-acc-tf-p-277890227438245369
2026-05-26T02:10:50.2721455Z     resource_test.go:174: 
2026-05-26T02:10:50.2722432Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-26T02:10:50.2724500Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-26T02:10:50.2726373Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-26T02:10:50.2728485Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrestprivateendpoint/resource_test.go:180
2026-05-26T02:10:50.2730941Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrestprivateendpoint/resource_test.go:174
2026-05-26T02:10:50.2732287Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-26T02:10:50.2732991Z         	Error:      	Received unexpected error:
2026-05-26T02:10:50.2735015Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:10:50.2736313Z         	Test:       	TestAccEncryptionAtRestPrivateEndpoint_AWS_basic
2026-05-26T02:10:50.2738215Z         	Messages:   	Project creation failed: test-acc-tf-p-277890227438245369, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:10:50.2739706Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_AWS_basic (71.76s)
```

- 2026-05-27 PASS 5 minutes
- 2026-05-28 PASS 5 minutes
- 2026-05-29 PASS 5 minutes
- 2026-05-30

### Error 2026-05-30T01:02:52+00:00
```
2026-05-30T01:02:52.6604746Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_AWS_basic
2026-05-30T01:02:52.6605413Z     resource_test.go:174: Creating execution project (1): test-acc-tf-p-2376213955469469102
2026-05-30T01:02:52.6605952Z     resource_test.go:174: 
2026-05-30T01:02:52.6607070Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T01:02:52.6608943Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-30T01:02:52.6611045Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-30T01:02:52.6613184Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrestprivateendpoint/resource_test.go:180
2026-05-30T01:02:52.6615430Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrestprivateendpoint/resource_test.go:174
2026-05-30T01:02:52.6616773Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-30T01:02:52.6617341Z         	Error:      	Received unexpected error:
2026-05-30T01:02:52.6619321Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:02:52.6620682Z         	Test:       	TestAccEncryptionAtRestPrivateEndpoint_AWS_basic
2026-05-30T01:02:52.6622588Z         	Messages:   	Project creation failed: test-acc-tf-p-2376213955469469102, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:02:52.6623901Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_AWS_basic (63.67s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 7 minutes
- 2026-06-02

### Error 2026-06-02T01:09:46+00:00
```
2026-06-02T01:09:46.5843739Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_AWS_basic
2026-06-02T01:09:46.5844425Z     resource_test.go:174: Creating execution project (1): test-acc-tf-p-2938560794356875697
2026-06-02T01:09:46.5844975Z     resource_test.go:174: 
2026-06-02T01:09:46.5845933Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-06-02T01:09:46.5847778Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-06-02T01:09:46.5849620Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-06-02T01:09:46.5851722Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrestprivateendpoint/resource_test.go:180
2026-06-02T01:09:46.5854086Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrestprivateendpoint/resource_test.go:174
2026-06-02T01:09:46.5855443Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-06-02T01:09:46.5856033Z         	Error:      	Received unexpected error:
2026-06-02T01:09:46.5858056Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:09:46.5859211Z         	Test:       	TestAccEncryptionAtRestPrivateEndpoint_AWS_basic
2026-06-02T01:09:46.5861055Z         	Messages:   	Project creation failed: test-acc-tf-p-2938560794356875697, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:09:46.5862749Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_AWS_basic (71.11s)
```

- 2026-06-03 PASS 11 minutes
- 2026-06-04 PASS 5 minutes
- 2026-06-05 PASS 5 minutes

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 6 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 6 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 6 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 5 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
