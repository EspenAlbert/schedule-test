# stream/streamprocessor/TestAccStreamProcessor_createErrors Test Details
# Found 34 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 29) FAIL(x 5)
Success rate: 85.29%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 01:15](#error-2026-07-09t0115210000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.06s
[2026-07-11 01:30](#error-2026-07-11t0130510000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.04s
[2026-07-21 00:59](#error-2026-07-21t0059130000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.10s
[2026-07-23 03:35](#error-2026-07-23t0335040000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | flaky_500 | 0.04s
[2026-08-03 01:33](#error-2026-08-03t0133300000) |  | dev | flaky_client | 5.02s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T01:15:21+00:00
```
2026-07-09T01:15:21.6483211Z === RUN   TestAccStreamProcessor_createErrors
2026-07-09T01:15:21.6483678Z     resource_test.go:376: Creating execution project (1): test-acc-tf-p-2980161583225255271
2026-07-09T01:15:21.6484077Z     resource_test.go:376: 
2026-07-09T01:15:21.6484791Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T01:15:21.6486255Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T01:15:21.6487622Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T01:15:21.6488963Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-09T01:15:21.6490371Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:376
2026-07-09T01:15:21.6491291Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-09T01:15:21.6491718Z         	Error:      	Received unexpected error:
2026-07-09T01:15:21.6493829Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T01:15:21.6494874Z         	Test:       	TestAccStreamProcessor_createErrors
2026-07-09T01:15:21.6496782Z         	Messages:   	Project creation failed: test-acc-tf-p-2980161583225255271, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T01:15:21.6497982Z --- FAIL: TestAccStreamProcessor_createErrors (0.62s)
```

- 2026-07-10 PASS a moment
- 2026-07-11

### Error 2026-07-11T01:30:51+00:00
```
2026-07-11T01:30:51.7844362Z === RUN   TestAccStreamProcessor_createErrors
2026-07-11T01:30:51.7844968Z     resource_test.go:376: Creating execution project (1): test-acc-tf-p-1039543151387747204
2026-07-11T01:30:51.7845495Z     resource_test.go:376: 
2026-07-11T01:30:51.7846552Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T01:30:51.7848633Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T01:30:51.7850581Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T01:30:51.7852410Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-11T01:30:51.7854366Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:376
2026-07-11T01:30:51.7855597Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-11T01:30:51.7856148Z         	Error:      	Received unexpected error:
2026-07-11T01:30:51.7859123Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-11T01:30:51.7860571Z         	Test:       	TestAccStreamProcessor_createErrors
2026-07-11T01:30:51.7862949Z         	Messages:   	Project creation failed: test-acc-tf-p-1039543151387747204, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-11T01:30:51.7864528Z --- FAIL: TestAccStreamProcessor_createErrors (0.37s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS a moment
- 2026-07-14 PASS a moment
- 2026-07-15 PASS a moment
- 2026-07-16 PASS a moment
- 2026-07-17 PASS a moment
- 2026-07-18 PASS a moment
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:59:13+00:00
```
2026-07-21T00:59:13.3876389Z === RUN   TestAccStreamProcessor_createErrors
2026-07-21T00:59:13.3877021Z     resource_test.go:376: Creating execution project (1): test-acc-tf-p-7785295964919354791
2026-07-21T00:59:13.3877703Z     resource_test.go:376: 
2026-07-21T00:59:13.3878796Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:59:13.3880942Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:59:13.3883209Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:59:13.3885289Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-21T00:59:13.3887722Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:376
2026-07-21T00:59:13.3889143Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-21T00:59:13.3889850Z         	Error:      	Received unexpected error:
2026-07-21T00:59:13.3893343Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:59:13.3894967Z         	Test:       	TestAccStreamProcessor_createErrors
2026-07-21T00:59:13.3897832Z         	Messages:   	Project creation failed: test-acc-tf-p-7785295964919354791, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:59:13.3899749Z --- FAIL: TestAccStreamProcessor_createErrors (0.97s)
```

- 2026-07-22 PASS a moment
- 2026-07-23

### Error 2026-07-23T03:35:04+00:00
```
2026-07-23T03:35:04.6387933Z === RUN   TestAccStreamProcessor_createErrors
2026-07-23T03:35:04.6388671Z     resource_test.go:376: Creating execution project (1): test-acc-tf-p-6276095384186924796
2026-07-23T03:35:04.6389204Z     resource_test.go:376: 
2026-07-23T03:35:04.6390138Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T03:35:04.6391919Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T03:35:04.6393692Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T03:35:04.6395463Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-23T03:35:04.6397500Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:376
2026-07-23T03:35:04.6398801Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-23T03:35:04.6399362Z         	Error:      	Received unexpected error:
2026-07-23T03:35:04.6402167Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T03:35:04.6403536Z         	Test:       	TestAccStreamProcessor_createErrors
2026-07-23T03:35:04.6405864Z         	Messages:   	Project creation failed: test-acc-tf-p-6276095384186924796, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T03:35:04.6407448Z --- FAIL: TestAccStreamProcessor_createErrors (0.42s)
```

- 2026-07-24 PASS a moment
- 2026-07-25 PASS a moment
- 2026-07-26: MISSING
- 2026-07-27 PASS a moment
- 2026-07-28 PASS a moment
- 2026-07-29 PASS a moment
- 2026-07-30 PASS a moment
- 2026-07-31 PASS a moment
- 2026-08-01 PASS a moment
- 2026-08-02: MISSING
- 2026-08-03
  - FAIL 5 seconds

### Error 2026-08-03T01:33:30+00:00
```
2026-08-03T01:33:30.0492743Z === RUN   TestAccStreamProcessor_createErrors
2026-08-03T01:33:30.0495949Z   diagnostic_detail=
2026-08-03T01:33:30.0498054Z    tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas
2026-08-03T01:33:30.0509795Z    test_terraform_path=/home/runner/work/_temp/15c4ca8d-89c8-44b4-a2b6-45595e5990a6/terraform test_working_directory=/tmp/plugintest1634105411 test_step_number=2
2026-08-03T01:33:30.0510926Z     resource_test.go:382: Step 2/2, expected an error with pattern, no match on: Error running pre-apply plan: exit status 1
2026-08-03T01:33:30.0511500Z         
2026-08-03T01:33:30.0511811Z         Error: error fetching resource
2026-08-03T01:33:30.0512122Z         
2026-08-03T01:33:30.0512538Z           with data.mongodbatlas_stream_connection.sample,
2026-08-03T01:33:30.0513289Z           on terraform_plugin_test.tf line 25, in data "mongodbatlas_stream_connection" "sample":
2026-08-03T01:33:30.0513990Z           25:             data "mongodbatlas_stream_connection" "sample" {
2026-08-03T01:33:30.0514509Z         
2026-08-03T01:33:30.0514778Z         Get
2026-08-03T01:33:30.0515728Z         "https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a6fe501aa9e3c145b667359/streams/test-acc-tf-s-3083674593888463384/connections/sample_stream_solar":
2026-08-03T01:33:30.0516545Z         dial tcp 3.231.133.249:443: i/o timeout
2026-08-03T01:33:30.0516933Z --- FAIL: TestAccStreamProcessor_createErrors (5.21s)
```

  - PASS a moment
  - PASS a moment
- 2026-08-04 PASS a moment
- 2026-08-05 PASS a moment
- 2026-08-06 PASS a moment
- 2026-08-07 PASS a moment

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS a moment
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS a moment
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS a moment
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS a moment
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS a moment
  - PASS a moment
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS a moment
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
