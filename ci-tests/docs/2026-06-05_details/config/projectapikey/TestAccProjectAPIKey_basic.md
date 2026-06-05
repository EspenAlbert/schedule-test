# config/projectapikey/TestAccProjectAPIKey_basic Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 24) FAIL(x 7)
Success rate: 77.42%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:08](#error-2026-05-09t0108300000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.02s
[2026-05-19 01:08](#error-2026-05-19t0108270000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.06s
[2026-05-23 01:05](#error-2026-05-23t0105370000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 67.01s
[2026-05-26 02:14](#error-2026-05-26t0214460000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 69.01s
[2026-05-28 01:02](#error-2026-05-28t0102570000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | flaky_500 | 0.08s
[2026-05-30 01:08](#error-2026-05-30t0108510000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 79.09s
[2026-06-02 01:16](#error-2026-06-02t0116140000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 70.03s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 13 seconds
  - PASS 15 seconds
- 2026-05-08 PASS 11 seconds
- 2026-05-09

### Error 2026-05-09T01:08:30+00:00
```
2026-05-09T01:08:30.7704604Z === RUN   TestAccProjectAPIKey_basic
2026-05-09T01:08:30.7705374Z     resource_project_api_key_test.go:28: Creating execution project (1): test-acc-tf-p-1771136842246225246
2026-05-09T01:08:30.7706032Z     resource_project_api_key_test.go:28: 
2026-05-09T01:08:30.7707104Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:08:30.7708444Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T01:08:30.7709803Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T01:08:30.7711279Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectapikey/resource_project_api_key_test.go:34
2026-05-09T01:08:30.7712813Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectapikey/resource_project_api_key_test.go:28
2026-05-09T01:08:30.7713971Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-09T01:08:30.7714374Z         	Error:      	Received unexpected error:
2026-05-09T01:08:30.7715840Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:08:30.7716598Z         	Test:       	TestAccProjectAPIKey_basic
2026-05-09T01:08:30.7717881Z         	Messages:   	Project creation failed: test-acc-tf-p-1771136842246225246, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:08:30.7719001Z --- FAIL: TestAccProjectAPIKey_basic (63.18s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 17 seconds
- 2026-05-12 PASS 16 seconds
- 2026-05-13 PASS 16 seconds
- 2026-05-14 PASS 14 seconds
- 2026-05-15 PASS 14 seconds
- 2026-05-16 PASS a minute
- 2026-05-17: MISSING
- 2026-05-18 PASS 15 seconds
- 2026-05-19

### Error 2026-05-19T01:08:27+00:00
```
2026-05-19T01:08:27.1508973Z === RUN   TestAccProjectAPIKey_basic
2026-05-19T01:08:27.1528508Z     resource_project_api_key_test.go:28: Creating execution project (1): test-acc-tf-p-7705099735247226793
2026-05-19T01:08:27.1530622Z     resource_project_api_key_test.go:28: 
2026-05-19T01:08:27.1558138Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-19T01:08:27.1564399Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-19T01:08:27.1573651Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-19T01:08:27.1580422Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectapikey/resource_project_api_key_test.go:34
2026-05-19T01:08:27.1584819Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectapikey/resource_project_api_key_test.go:28
2026-05-19T01:08:27.1587168Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-19T01:08:27.1588051Z         	Error:      	Received unexpected error:
2026-05-19T01:08:27.1591738Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:08:27.1593576Z         	Test:       	TestAccProjectAPIKey_basic
2026-05-19T01:08:27.1597027Z         	Messages:   	Project creation failed: test-acc-tf-p-7705099735247226793, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:08:27.1599122Z --- FAIL: TestAccProjectAPIKey_basic (61.58s)
```

- 2026-05-20 PASS 19 seconds
- 2026-05-21 PASS a minute
- 2026-05-22 PASS 16 seconds
- 2026-05-23

### Error 2026-05-23T01:05:37+00:00
```
2026-05-23T01:05:37.1726293Z === RUN   TestAccProjectAPIKey_basic
2026-05-23T01:05:37.1727198Z     resource_project_api_key_test.go:28: Creating execution project (1): test-acc-tf-p-6815014511345000707
2026-05-23T01:05:37.1727938Z     resource_project_api_key_test.go:28: 
2026-05-23T01:05:37.1729124Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-23T01:05:37.1731595Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-23T01:05:37.1733941Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-23T01:05:37.1736579Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectapikey/resource_project_api_key_test.go:34
2026-05-23T01:05:37.1739260Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectapikey/resource_project_api_key_test.go:28
2026-05-23T01:05:37.1740971Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-23T01:05:37.1741610Z         	Error:      	Received unexpected error:
2026-05-23T01:05:37.1744125Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:05:37.1745399Z         	Test:       	TestAccProjectAPIKey_basic
2026-05-23T01:05:37.1747633Z         	Messages:   	Project creation failed: test-acc-tf-p-6815014511345000707, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:05:37.1749357Z --- FAIL: TestAccProjectAPIKey_basic (67.14s)
```

- 2026-05-24: MISSING
- 2026-05-25 PASS 18 seconds
- 2026-05-26

### Error 2026-05-26T02:14:46+00:00
```
2026-05-26T02:14:46.0419251Z === RUN   TestAccProjectAPIKey_basic
2026-05-26T02:14:46.0419867Z     resource_project_api_key_test.go:28: Creating execution project (1): test-acc-tf-p-4574823960231841511
2026-05-26T02:14:46.0420428Z     resource_project_api_key_test.go:28: 
2026-05-26T02:14:46.0421358Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-26T02:14:46.0423249Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-26T02:14:46.0425065Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-26T02:14:46.0427039Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectapikey/resource_project_api_key_test.go:34
2026-05-26T02:14:46.0429260Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectapikey/resource_project_api_key_test.go:28
2026-05-26T02:14:46.0430485Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-26T02:14:46.0430986Z         	Error:      	Received unexpected error:
2026-05-26T02:14:46.0432890Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:14:46.0434178Z         	Test:       	TestAccProjectAPIKey_basic
2026-05-26T02:14:46.0435903Z         	Messages:   	Project creation failed: test-acc-tf-p-4574823960231841511, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:14:46.0437072Z --- FAIL: TestAccProjectAPIKey_basic (69.11s)
```

- 2026-05-27 PASS 16 seconds
- 2026-05-28

### Error 2026-05-28T01:02:57+00:00
```
2026-05-28T01:02:57.6332986Z === RUN   TestAccProjectAPIKey_basic
2026-05-28T01:02:57.6333595Z     resource_project_api_key_test.go:28: Creating execution project (1): test-acc-tf-p-2038114043450021621
2026-05-28T01:02:57.6334153Z     resource_project_api_key_test.go:28: 
2026-05-28T01:02:57.6335087Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:02:57.6336907Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T01:02:57.6338693Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T01:02:57.6340681Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectapikey/resource_project_api_key_test.go:34
2026-05-28T01:02:57.6343020Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectapikey/resource_project_api_key_test.go:28
2026-05-28T01:02:57.6344267Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-28T01:02:57.6344775Z         	Error:      	Received unexpected error:
2026-05-28T01:02:57.6347567Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:02:57.6348916Z         	Test:       	TestAccProjectAPIKey_basic
2026-05-28T01:02:57.6351337Z         	Messages:   	Project creation failed: test-acc-tf-p-2038114043450021621, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:02:57.6352836Z --- FAIL: TestAccProjectAPIKey_basic (0.78s)
```

- 2026-05-29 PASS 10 seconds
- 2026-05-30

### Error 2026-05-30T01:08:51+00:00
```
2026-05-30T01:08:51.9402035Z === RUN   TestAccProjectAPIKey_basic
2026-05-30T01:08:51.9402929Z     resource_project_api_key_test.go:28: Creating execution project (1): test-acc-tf-p-1176280800742643438
2026-05-30T01:08:51.9403879Z     resource_project_api_key_test.go:28: 
2026-05-30T01:08:51.9405111Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T01:08:51.9407935Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-30T01:08:51.9409770Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-30T01:08:51.9411773Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectapikey/resource_project_api_key_test.go:34
2026-05-30T01:08:51.9413846Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectapikey/resource_project_api_key_test.go:28
2026-05-30T01:08:51.9415087Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-30T01:08:51.9415635Z         	Error:      	Received unexpected error:
2026-05-30T01:08:51.9418410Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:08:51.9419504Z         	Test:       	TestAccProjectAPIKey_basic
2026-05-30T01:08:51.9421221Z         	Messages:   	Project creation failed: test-acc-tf-p-1176280800742643438, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:08:51.9422658Z --- FAIL: TestAccProjectAPIKey_basic (79.95s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 10 seconds
- 2026-06-02

### Error 2026-06-02T01:16:14+00:00
```
2026-06-02T01:16:14.0356182Z === RUN   TestAccProjectAPIKey_basic
2026-06-02T01:16:14.0357027Z     resource_project_api_key_test.go:28: Creating execution project (1): test-acc-tf-p-8891517236000237095
2026-06-02T01:16:14.0357697Z     resource_project_api_key_test.go:28: 
2026-06-02T01:16:14.0358896Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-06-02T01:16:14.0361247Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-06-02T01:16:14.0362869Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-06-02T01:16:14.0364411Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectapikey/resource_project_api_key_test.go:34
2026-06-02T01:16:14.0366008Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectapikey/resource_project_api_key_test.go:28
2026-06-02T01:16:14.0367006Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-06-02T01:16:14.0367434Z         	Error:      	Received unexpected error:
2026-06-02T01:16:14.0368946Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:16:14.0370024Z         	Test:       	TestAccProjectAPIKey_basic
2026-06-02T01:16:14.0371365Z         	Messages:   	Project creation failed: test-acc-tf-p-8891517236000237095, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:16:14.0372448Z --- FAIL: TestAccProjectAPIKey_basic (70.29s)
```

- 2026-06-03 PASS 18 seconds
- 2026-06-04 PASS 17 seconds
- 2026-06-05 PASS 15 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 14 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 12 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 16 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 11 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
