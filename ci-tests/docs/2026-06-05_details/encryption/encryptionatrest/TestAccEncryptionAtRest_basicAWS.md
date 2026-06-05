# encryption/encryptionatrest/TestAccEncryptionAtRest_basicAWS Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 24) FAIL(x 6)
Success rate: 80.00%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 00:57](#error-2026-05-09t0057340000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 74.05s
[2026-05-16 00:57](#error-2026-05-16t0057030000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 87.06s
[2026-05-23 01:01](#error-2026-05-23t0101360000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 87.02s
[2026-05-26 02:10](#error-2026-05-26t0210470000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 66.03s
[2026-05-28 00:59](#error-2026-05-28t0059510000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 75.05s
[2026-05-30 01:02](#error-2026-05-30t0102520000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 66.05s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 2 minutes
- 2026-05-08 PASS a minute
- 2026-05-09

### Error 2026-05-09T00:57:34+00:00
```
2026-05-09T00:57:34.2863156Z === RUN   TestAccEncryptionAtRest_basicAWS
2026-05-09T00:57:34.2864320Z     resource_test.go:30: Creating execution project (1): test-acc-tf-p-671890077028681539
2026-05-09T00:57:34.2865282Z     resource_test.go:30: 
2026-05-09T00:57:34.2866430Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T00:57:34.2868638Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T00:57:34.2870469Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T00:57:34.2872379Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrest/resource_test.go:37
2026-05-09T00:57:34.2874450Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrest/resource_test.go:30
2026-05-09T00:57:34.2875682Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-09T00:57:34.2876224Z         	Error:      	Received unexpected error:
2026-05-09T00:57:34.2878579Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T00:57:34.2879735Z         	Test:       	TestAccEncryptionAtRest_basicAWS
2026-05-09T00:57:34.2881540Z         	Messages:   	Project creation failed: test-acc-tf-p-671890077028681539, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T00:57:34.2882750Z --- FAIL: TestAccEncryptionAtRest_basicAWS (74.45s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS a minute
- 2026-05-12 PASS a minute
- 2026-05-13 PASS a minute
- 2026-05-14 PASS a minute
- 2026-05-15 PASS a minute
- 2026-05-16

### Error 2026-05-16T00:57:03+00:00
```
2026-05-16T00:57:03.6322516Z === RUN   TestAccEncryptionAtRest_basicAWS
2026-05-16T00:57:03.6325356Z     resource_test.go:30: Creating execution project (1): test-acc-tf-p-4905776923256448512
2026-05-16T00:57:03.6326021Z     resource_test.go:30: 
2026-05-16T00:57:03.6326935Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-16T00:57:03.6328640Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-16T00:57:03.6330680Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-16T00:57:03.6332465Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrest/resource_test.go:37
2026-05-16T00:57:03.6334257Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrest/resource_test.go:30
2026-05-16T00:57:03.6335410Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-16T00:57:03.6335934Z         	Error:      	Received unexpected error:
2026-05-16T00:57:03.6337783Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T00:57:03.6338799Z         	Test:       	TestAccEncryptionAtRest_basicAWS
2026-05-16T00:57:03.6340591Z         	Messages:   	Project creation failed: test-acc-tf-p-4905776923256448512, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T00:57:03.6341756Z --- FAIL: TestAccEncryptionAtRest_basicAWS (87.65s)
```

- 2026-05-17: MISSING
- 2026-05-18 PASS a minute
- 2026-05-19 PASS a minute
- 2026-05-20 PASS a minute
- 2026-05-21 PASS 2 minutes
- 2026-05-22 PASS a minute
- 2026-05-23

### Error 2026-05-23T01:01:36+00:00
```
2026-05-23T01:01:36.2162144Z === RUN   TestAccEncryptionAtRest_basicAWS
2026-05-23T01:01:36.2164936Z     resource_test.go:30: Creating execution project (1): test-acc-tf-p-2092060452955332295
2026-05-23T01:01:36.2165906Z     resource_test.go:30: 
2026-05-23T01:01:36.2167345Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-23T01:01:36.2169297Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-23T01:01:36.2171574Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-23T01:01:36.2173558Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrest/resource_test.go:37
2026-05-23T01:01:36.2175593Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrest/resource_test.go:30
2026-05-23T01:01:36.2176861Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-23T01:01:36.2177413Z         	Error:      	Received unexpected error:
2026-05-23T01:01:36.2179424Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:01:36.2180570Z         	Test:       	TestAccEncryptionAtRest_basicAWS
2026-05-23T01:01:36.2182717Z         	Messages:   	Project creation failed: test-acc-tf-p-2092060452955332295, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:01:36.2183996Z --- FAIL: TestAccEncryptionAtRest_basicAWS (87.16s)
```

- 2026-05-24: MISSING
- 2026-05-25 PASS a minute
- 2026-05-26

### Error 2026-05-26T02:10:47+00:00
```
2026-05-26T02:10:47.5605777Z === RUN   TestAccEncryptionAtRest_basicAWS
2026-05-26T02:10:47.5606769Z     resource_test.go:30: Creating execution project (1): test-acc-tf-p-8929236708379542171
2026-05-26T02:10:47.5608811Z     resource_test.go:30: 
2026-05-26T02:10:47.5610200Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-26T02:10:47.5612160Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-26T02:10:47.5614067Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-26T02:10:47.5616043Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrest/resource_test.go:37
2026-05-26T02:10:47.5618116Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrest/resource_test.go:30
2026-05-26T02:10:47.5619787Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-26T02:10:47.5620371Z         	Error:      	Received unexpected error:
2026-05-26T02:10:47.5622404Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:10:47.5623515Z         	Test:       	TestAccEncryptionAtRest_basicAWS
2026-05-26T02:10:47.5625353Z         	Messages:   	Project creation failed: test-acc-tf-p-8929236708379542171, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:10:47.5626605Z --- FAIL: TestAccEncryptionAtRest_basicAWS (66.27s)
```

- 2026-05-27 PASS a minute
- 2026-05-28

### Error 2026-05-28T00:59:51+00:00
```
2026-05-28T00:59:51.2738032Z === RUN   TestAccEncryptionAtRest_basicAWS
2026-05-28T00:59:51.2738689Z     resource_test.go:30: Creating execution project (1): test-acc-tf-p-8454483628994593588
2026-05-28T00:59:51.2740453Z     resource_test.go:30: 
2026-05-28T00:59:51.2741244Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T00:59:51.2742693Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T00:59:51.2744125Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T00:59:51.2745763Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrest/resource_test.go:37
2026-05-28T00:59:51.2747300Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrest/resource_test.go:30
2026-05-28T00:59:51.2748260Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-28T00:59:51.2748704Z         	Error:      	Received unexpected error:
2026-05-28T00:59:51.2750237Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T00:59:51.2751100Z         	Test:       	TestAccEncryptionAtRest_basicAWS
2026-05-28T00:59:51.2752474Z         	Messages:   	Project creation failed: test-acc-tf-p-8454483628994593588, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T00:59:51.2753678Z --- FAIL: TestAccEncryptionAtRest_basicAWS (75.47s)
```

- 2026-05-29 PASS a minute
- 2026-05-30

### Error 2026-05-30T01:02:52+00:00
```
2026-05-30T01:02:52.6527391Z === RUN   TestAccEncryptionAtRest_basicAWS
2026-05-30T01:02:52.6528705Z     resource_test.go:30: Creating execution project (1): test-acc-tf-p-1752758264239343415
2026-05-30T01:02:52.6529736Z     resource_test.go:30: 
2026-05-30T01:02:52.6531796Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T01:02:52.6535151Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-30T01:02:52.6538754Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-30T01:02:52.6543065Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrest/resource_test.go:37
2026-05-30T01:02:52.6546563Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrest/resource_test.go:30
2026-05-30T01:02:52.6547969Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-30T01:02:52.6548583Z         	Error:      	Received unexpected error:
2026-05-30T01:02:52.6550977Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:02:52.6552125Z         	Test:       	TestAccEncryptionAtRest_basicAWS
2026-05-30T01:02:52.6553978Z         	Messages:   	Project creation failed: test-acc-tf-p-1752758264239343415, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:02:52.6555287Z --- FAIL: TestAccEncryptionAtRest_basicAWS (66.51s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS a minute
- 2026-06-02 PASS a minute
- 2026-06-03 PASS a minute
- 2026-06-04 PASS a minute
- 2026-06-05 PASS a minute

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS a minute
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS a minute
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS a minute
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS a minute
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
