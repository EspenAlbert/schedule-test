# autogen_slow/searchindexapi/TestAccSearchIndexAPI_withStoredSourceInclude Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 27) FAIL(x 5)
Success rate: 84.38%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 01:36](#error-2026-07-09t0136440000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.09s
[2026-07-11 00:54](#error-2026-07-11t0054050000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.04s
[2026-07-18 01:15](#error-2026-07-18t0115300000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 84.03s
[2026-07-21 01:42](#error-2026-07-21t0142120000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.01s
[2026-07-23 02:04](#error-2026-07-23t0204190000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.05s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T01:36:44+00:00
```
2026-07-09T01:36:44.2993471Z === RUN   TestAccSearchIndexAPI_withStoredSourceInclude
2026-07-09T01:36:44.2994155Z     resource_test.go:181: Creating execution project (1): test-acc-tf-p-1975204348794188803
2026-07-09T01:36:44.2994730Z     resource_test.go:181: 
2026-07-09T01:36:44.2996159Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T01:36:44.2998055Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T01:36:44.2999945Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T01:36:44.3001832Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-07-09T01:36:44.3003852Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:181
2026-07-09T01:36:44.3005343Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-09T01:36:44.3006091Z         	Error:      	Received unexpected error:
2026-07-09T01:36:44.3009012Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T01:36:44.3010555Z         	Test:       	TestAccSearchIndexAPI_withStoredSourceInclude
2026-07-09T01:36:44.3013007Z         	Messages:   	Project creation failed: test-acc-tf-p-1975204348794188803, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T01:36:44.3014653Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceInclude (0.85s)
```

- 2026-07-10 PASS 9 minutes
- 2026-07-11

### Error 2026-07-11T00:54:05+00:00
```
2026-07-11T00:54:05.8036375Z === RUN   TestAccSearchIndexAPI_withStoredSourceInclude
2026-07-11T00:54:05.8037481Z     resource_test.go:181: Creating execution project (1): test-acc-tf-p-8248974715582951574
2026-07-11T00:54:05.8038382Z     resource_test.go:181: 
2026-07-11T00:54:05.8040103Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:54:05.8043576Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:54:05.8047406Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:54:05.8051066Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-07-11T00:54:05.8054965Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:181
2026-07-11T00:54:05.8057623Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-11T00:54:05.8058628Z         	Error:      	Received unexpected error:
2026-07-11T00:54:05.8064316Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-11T00:54:05.8067664Z         	Test:       	TestAccSearchIndexAPI_withStoredSourceInclude
2026-07-11T00:54:05.8072290Z         	Messages:   	Project creation failed: test-acc-tf-p-8248974715582951574, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-11T00:54:05.8075164Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceInclude (0.45s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 46 minutes
- 2026-07-14 PASS 23 minutes
- 2026-07-15 PASS 35 minutes
- 2026-07-16 PASS 5 minutes
- 2026-07-17 PASS 40 minutes
- 2026-07-18

### Error 2026-07-18T01:15:30+00:00
```
2026-07-18T01:15:30.9006077Z === RUN   TestAccSearchIndexAPI_withStoredSourceInclude
2026-07-18T01:15:30.9006707Z     resource_test.go:181: Creating execution project (1): test-acc-tf-p-5340046992763757901
2026-07-18T01:15:30.9007222Z     resource_test.go:181: 
2026-07-18T01:15:30.9008170Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T01:15:30.9010029Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-18T01:15:30.9011889Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-18T01:15:30.9013959Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-07-18T01:15:30.9015936Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:181
2026-07-18T01:15:30.9017193Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-18T01:15:30.9017729Z         	Error:      	Received unexpected error:
2026-07-18T01:15:30.9019733Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T01:15:30.9020857Z         	Test:       	TestAccSearchIndexAPI_withStoredSourceInclude
2026-07-18T01:15:30.9022704Z         	Messages:   	Project creation failed: test-acc-tf-p-5340046992763757901, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T01:15:30.9024341Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceInclude (84.25s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T01:42:12+00:00
```
2026-07-21T01:42:12.8284380Z === RUN   TestAccSearchIndexAPI_withStoredSourceInclude
2026-07-21T01:42:12.8285018Z     resource_test.go:181: Creating execution project (1): test-acc-tf-p-2629585037202753832
2026-07-21T01:42:12.8285549Z     resource_test.go:181: 
2026-07-21T01:42:12.8286510Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T01:42:12.8288658Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T01:42:12.8290572Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T01:42:12.8292483Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-07-21T01:42:12.8294486Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:181
2026-07-21T01:42:12.8295894Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-21T01:42:12.8296458Z         	Error:      	Received unexpected error:
2026-07-21T01:42:12.8299753Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T01:42:12.8301353Z         	Test:       	TestAccSearchIndexAPI_withStoredSourceInclude
2026-07-21T01:42:12.8303925Z         	Messages:   	Project creation failed: test-acc-tf-p-2629585037202753832, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T01:42:12.8305623Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceInclude (1.09s)
```

- 2026-07-22 PASS 44 minutes
- 2026-07-23

### Error 2026-07-23T02:04:19+00:00
```
2026-07-23T02:04:19.8598867Z === RUN   TestAccSearchIndexAPI_withStoredSourceInclude
2026-07-23T02:04:19.8599578Z     resource_test.go:181: Creating execution project (1): test-acc-tf-p-567909421525320628
2026-07-23T02:04:19.8600357Z     resource_test.go:181: 
2026-07-23T02:04:19.8601409Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T02:04:19.8603563Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T02:04:19.8605595Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T02:04:19.8607810Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-07-23T02:04:19.8610261Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:181
2026-07-23T02:04:19.8611677Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-23T02:04:19.8612353Z         	Error:      	Received unexpected error:
2026-07-23T02:04:19.8616088Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T02:04:19.8617903Z         	Test:       	TestAccSearchIndexAPI_withStoredSourceInclude
2026-07-23T02:04:19.8620835Z         	Messages:   	Project creation failed: test-acc-tf-p-567909421525320628, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T02:04:19.8622687Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceInclude (0.48s)
```

- 2026-07-24 PASS 15 minutes
- 2026-07-25 PASS 59 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS 4 minutes
- 2026-07-28 PASS 5 minutes
- 2026-07-29 PASS 21 minutes
- 2026-07-30 PASS 3 minutes
- 2026-07-31 PASS 59 minutes
- 2026-08-01 PASS 56 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 53 minutes
- 2026-08-04 PASS 46 minutes
- 2026-08-05 PASS 34 minutes
- 2026-08-06 PASS 17 minutes
- 2026-08-07 PASS 18 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 25 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 12 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 31 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 22 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 34 minutes
  - PASS 51 minutes
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 18 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
