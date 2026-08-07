# ldap/ldapconfiguration/TestAccLDAPConfiguration_basic Test Details
# Found 33 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 24) FAIL(x 9)
Success rate: 72.73%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:51](#error-2026-07-09t0051340000) |  | dev | flaky_500 | 62.08s
[2026-07-10 01:24](#error-2026-07-10t0124090000) | LDAP_HOSTNAME_NOT_ALLOWED /api/atlas/v2/groups/6a5041a1af0479f8ffb2e43b/userSecurity | dev |  | 0.04s
[2026-07-11 00:45](#error-2026-07-11t0045350000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 67.06s
[2026-07-13 01:03](#error-2026-07-13t0103270000) | LDAP_HOSTNAME_NOT_ALLOWED /api/atlas/v2/groups/6a54356da3b75f3f04491cc3/userSecurity | dev |  | 0.04s
[2026-07-14 00:56](#error-2026-07-14t0056350000) | LDAP_HOSTNAME_NOT_ALLOWED /api/atlas/v2/groups/6a5585a5281936d9b18af7fd/userSecurity | dev |  | 5.04s
[2026-07-18 00:43](#error-2026-07-18t0043370000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.09s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:51:34+00:00
```
2026-07-09T00:51:34.2062556Z === RUN   TestAccLDAPConfiguration_basic
2026-07-09T00:51:34.2064490Z     resource_ldap_configuration_test.go:22: Creating execution project (1): test-acc-tf-p-470849416146***3033
2026-07-09T00:51:34.2065735Z     resource_ldap_configuration_test.go:22: 
2026-07-09T00:51:34.2066969Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:51:34.2068902Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:51:34.2071136Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:51:34.2073229Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/ldapconfiguration/resource_ldap_configuration_test.go:83
2026-07-09T00:51:34.2075456Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/ldapconfiguration/resource_ldap_configuration_test.go:22
2026-07-09T00:51:34.2077005Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-09T00:51:34.2077777Z         	Error:      	Received unexpected error:
2026-07-09T00:51:34.2079017Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2026-07-09T00:51:34.2079829Z         	Test:       	TestAccLDAPConfiguration_basic
2026-07-09T00:51:34.2081238Z         	Messages:   	Project creation failed: test-acc-tf-p-470849416146***3033, err: (503 Service Unavailable) failed to decode response body: undefined response type
2026-07-09T00:51:34.2082256Z --- FAIL: TestAccLDAPConfiguration_basic (62.79s)
```

- 2026-07-10

### Error 2026-07-10T01:24:09+00:00
```
2026-07-10T01:24:09.8232241Z === RUN   TestAccLDAPConfiguration_basic
2026-07-10T01:24:09.8247881Z    test_name=TestAccLDAPConfiguration_basic
2026-07-10T01:24:09.8248615Z     resource_ldap_configuration_test.go:22: Step 1/2 error: Error running apply: exit status 1
2026-07-10T01:24:09.8249182Z         
2026-07-10T01:24:09.8251747Z         Error: error creating MongoDB LDAPConfiguration (6a5041a1af0479f8ffb2e43b): https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a5041a1af0479f8ffb2e43b/userSecurity PATCH: HTTP 400 Bad Request (Error code: "LDAP_HOSTNAME_NOT_ALLOWED") Detail: The LDAP hostname *** is not allowed. Reason: Bad Request. Params: [***], BadRequestDetail: 
2026-07-10T01:24:09.8253356Z         
2026-07-10T01:24:09.8253852Z           with mongodbatlas_ldap_configuration.test,
2026-07-10T01:24:09.8254675Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_ldap_configuration" "test":
2026-07-10T01:24:09.8255454Z           12: 		resource "mongodbatlas_ldap_configuration" "test" {
2026-07-10T01:24:09.8255896Z         
2026-07-10T01:24:09.8256252Z --- FAIL: TestAccLDAPConfiguration_basic (0.45s)
```

- 2026-07-11

### Error 2026-07-11T00:45:35+00:00
```
2026-07-11T00:45:35.7498831Z === RUN   TestAccLDAPConfiguration_basic
2026-07-11T00:45:35.7500269Z     resource_ldap_configuration_test.go:22: Creating execution project (1): test-acc-tf-p-7054338055912176797
2026-07-11T00:45:35.7502533Z     resource_ldap_configuration_test.go:22: 
2026-07-11T00:45:35.7503974Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:45:35.7506431Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:45:35.7508847Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:45:35.7512206Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/ldapconfiguration/resource_ldap_configuration_test.go:83
2026-07-11T00:45:35.7515153Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/ldapconfiguration/resource_ldap_configuration_test.go:22
2026-07-11T00:45:35.7516697Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-11T00:45:35.7517323Z         	Error:      	Received unexpected error:
2026-07-11T00:45:35.7519351Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:45:35.7520913Z         	Test:       	TestAccLDAPConfiguration_basic
2026-07-11T00:45:35.7522792Z         	Messages:   	Project creation failed: test-acc-tf-p-7054338055912176797, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:45:35.7524085Z --- FAIL: TestAccLDAPConfiguration_basic (67.63s)
```

- 2026-07-12: MISSING
- 2026-07-13

### Error 2026-07-13T01:03:27+00:00
```
2026-07-13T01:03:27.6200623Z === RUN   TestAccLDAPConfiguration_basic
2026-07-13T01:03:27.6224987Z   
2026-07-13T01:03:27.6225944Z     resource_ldap_configuration_test.go:22: Step 1/2 error: Error running apply: exit status 1
2026-07-13T01:03:27.6226823Z         
2026-07-13T01:03:27.6231010Z         Error: error creating MongoDB LDAPConfiguration (6a54356da3b75f3f04491cc3): https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a54356da3b75f3f04491cc3/userSecurity PATCH: HTTP 400 Bad Request (Error code: "LDAP_HOSTNAME_NOT_ALLOWED") Detail: The LDAP hostname *** is not allowed. Reason: Bad Request. Params: [***], BadRequestDetail: 
2026-07-13T01:03:27.6233272Z         
2026-07-13T01:03:27.6233983Z           with mongodbatlas_ldap_configuration.test,
2026-07-13T01:03:27.6235440Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_ldap_configuration" "test":
2026-07-13T01:03:27.6236674Z           12: 		resource "mongodbatlas_ldap_configuration" "test" {
2026-07-13T01:03:27.6237356Z         
2026-07-13T01:03:27.6237904Z --- FAIL: TestAccLDAPConfiguration_basic (0.44s)
```

- 2026-07-14

### Error 2026-07-14T00:56:35+00:00
```
2026-07-14T00:56:35.4058281Z === RUN   TestAccLDAPConfiguration_basic
2026-07-14T00:56:35.4059892Z     resource_ldap_configuration_test.go:22: Creating execution project (1): test-acc-tf-p-8472687729192553681
2026-07-14T00:56:35.4077111Z   
2026-07-14T00:56:35.4077732Z     resource_ldap_configuration_test.go:22: Step 1/2 error: Error running apply: exit status 1
2026-07-14T00:56:35.4078292Z         
2026-07-14T00:56:35.4080902Z         Error: error creating MongoDB LDAPConfiguration (6a5585a5281936d9b18af7fd): https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a5585a5281936d9b18af7fd/userSecurity PATCH: HTTP 400 Bad Request (Error code: "LDAP_HOSTNAME_NOT_ALLOWED") Detail: The LDAP hostname *** is not allowed. Reason: Bad Request. Params: [***], BadRequestDetail: 
2026-07-14T00:56:35.4082327Z         
2026-07-14T00:56:35.4082795Z           with mongodbatlas_ldap_configuration.test,
2026-07-14T00:56:35.4083627Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_ldap_configuration" "test":
2026-07-14T00:56:35.4084418Z           12: 		resource "mongodbatlas_ldap_configuration" "test" {
2026-07-14T00:56:35.4084857Z         
2026-07-14T00:56:35.4085521Z --- FAIL: TestAccLDAPConfiguration_basic (5.44s)
```

- 2026-07-15 PASS 3 seconds
- 2026-07-16 PASS 7 seconds
- 2026-07-17 PASS 2 seconds
- 2026-07-18

### Error 2026-07-18T00:43:37+00:00
```
2026-07-18T00:43:37.1914958Z === RUN   TestAccLDAPConfiguration_basic
2026-07-18T00:43:37.1916533Z     resource_ldap_configuration_test.go:22: Creating execution project (1): test-acc-tf-p-7454416067429134190
2026-07-18T00:43:37.1917376Z     resource_ldap_configuration_test.go:22: 
2026-07-18T00:43:37.1918902Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T00:43:37.1921167Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-18T00:43:37.1923367Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-18T00:43:37.1926212Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/ldapconfiguration/resource_ldap_configuration_test.go:83
2026-07-18T00:43:37.1929163Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/ldapconfiguration/resource_ldap_configuration_test.go:22
2026-07-18T00:43:37.1930646Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-18T00:43:37.1931242Z         	Error:      	Received unexpected error:
2026-07-18T00:43:37.1933272Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:43:37.1934424Z         	Test:       	TestAccLDAPConfiguration_basic
2026-07-18T00:43:37.1936807Z         	Messages:   	Project creation failed: test-acc-tf-p-7454416067429134190, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:43:37.1938122Z --- FAIL: TestAccLDAPConfiguration_basic (61.86s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21 PASS 16 seconds
- 2026-07-22 PASS 3 seconds
- 2026-07-23 PASS 6 seconds
- 2026-07-24 PASS 2 seconds
- 2026-07-25 PASS 3 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 2 seconds
- 2026-07-28 PASS 5 seconds
- 2026-07-29 PASS 2 seconds
- 2026-07-30 PASS 4 seconds
- 2026-07-31 PASS 3 seconds
- 2026-08-01 PASS 4 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 2 seconds
- 2026-08-04 PASS 4 seconds
- 2026-08-05 PASS a second
- 2026-08-06 PASS 4 seconds
- 2026-08-07 PASS 3 seconds

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-07-12 01:05](#error-2026-07-12t0105090000) | LDAP_HOSTNAME_NOT_ALLOWED /api/atlas/v2/groups/6a52e45254924de0baf4a87a/userSecurity | qa | 0.04s
[2026-07-15 07:39](#error-2026-07-15t0739440000) | LDAP_HOSTNAME_NOT_ALLOWED /api/atlas/v2/groups/6a5735828f62f9b41280c7a6/userSecurity | qa | 0.07s
[2026-07-15 09:47](#error-2026-07-15t0947540000) | LDAP_HOSTNAME_NOT_ALLOWED /api/atlas/v2/groups/6a5753ad8f62f9b412918c81/userSecurity | qa | 0.05s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12

### Error 2026-07-12T01:05:09+00:00
```
2026-07-12T01:05:09.8577932Z === RUN   TestAccLDAPConfiguration_basic
2026-07-12T01:05:09.8592835Z   
2026-07-12T01:05:09.8593628Z     resource_ldap_configuration_test.go:22: Step 1/2 error: Error running apply: exit status 1
2026-07-12T01:05:09.8605901Z         
2026-07-12T01:05:09.8608511Z         Error: error creating MongoDB LDAPConfiguration (6a52e45254924de0baf4a87a): https://cloud-qa.mongodb.com/api/atlas/v2/groups/6a52e45254924de0baf4a87a/userSecurity PATCH: HTTP 400 Bad Request (Error code: "LDAP_HOSTNAME_NOT_ALLOWED") Detail: The LDAP hostname *** is not allowed. Reason: Bad Request. Params: [***], BadRequestDetail: 
2026-07-12T01:05:09.8609957Z         
2026-07-12T01:05:09.8610414Z           with mongodbatlas_ldap_configuration.test,
2026-07-12T01:05:09.8611236Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_ldap_configuration" "test":
2026-07-12T01:05:09.8612007Z           12: 		resource "mongodbatlas_ldap_configuration" "test" {
2026-07-12T01:05:09.8612445Z         
2026-07-12T01:05:09.8612799Z --- FAIL: TestAccLDAPConfiguration_basic (0.43s)
```

- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15
  - FAIL a moment

### Error 2026-07-15T07:39:44+00:00
```
2026-07-15T07:39:44.2277554Z === RUN   TestAccLDAPConfiguration_basic
2026-07-15T07:39:44.2290765Z   
2026-07-15T07:39:44.2291324Z     resource_ldap_configuration_test.go:22: Step 1/2 error: Error running apply: exit status 1
2026-07-15T07:39:44.2291850Z         
2026-07-15T07:39:44.2293997Z         Error: error creating MongoDB LDAPConfiguration (6a5735828f62f9b41280c7a6): https://cloud-qa.mongodb.com/api/atlas/v2/groups/6a5735828f62f9b41280c7a6/userSecurity PATCH: HTTP 400 Bad Request (Error code: "LDAP_HOSTNAME_NOT_ALLOWED") Detail: The LDAP hostname *** is not allowed. Reason: Bad Request. Params: [***], BadRequestDetail: 
2026-07-15T07:39:44.2295206Z         
2026-07-15T07:39:44.2295842Z           with mongodbatlas_ldap_configuration.test,
2026-07-15T07:39:44.2296589Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_ldap_configuration" "test":
2026-07-15T07:39:44.2297304Z           12: 		resource "mongodbatlas_ldap_configuration" "test" {
2026-07-15T07:39:44.2297739Z         
2026-07-15T07:39:44.2298104Z --- FAIL: TestAccLDAPConfiguration_basic (0.75s)
```

  - FAIL a moment

### Error 2026-07-15T09:47:54+00:00
```
2026-07-15T09:47:54.5833764Z === RUN   TestAccLDAPConfiguration_basic
2026-07-15T09:47:54.5848425Z   
2026-07-15T09:47:54.5849038Z     resource_ldap_configuration_test.go:22: Step 1/2 error: Error running apply: exit status 1
2026-07-15T09:47:54.5849586Z         
2026-07-15T09:47:54.5852262Z         Error: error creating MongoDB LDAPConfiguration (6a5753ad8f62f9b412918c81): https://cloud-qa.mongodb.com/api/atlas/v2/groups/6a5753ad8f62f9b412918c81/userSecurity PATCH: HTTP 400 Bad Request (Error code: "LDAP_HOSTNAME_NOT_ALLOWED") Detail: The LDAP hostname *** is not allowed. Reason: Bad Request. Params: [***], BadRequestDetail: 
2026-07-15T09:47:54.5853625Z         
2026-07-15T09:47:54.5854085Z           with mongodbatlas_ldap_configuration.test,
2026-07-15T09:47:54.5854921Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_ldap_configuration" "test":
2026-07-15T09:47:54.5855709Z           12: 		resource "mongodbatlas_ldap_configuration" "test" {
2026-07-15T09:47:54.5856159Z         
2026-07-15T09:47:54.5856548Z --- FAIL: TestAccLDAPConfiguration_basic (0.47s)
```

- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 3 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS a second
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 5 seconds
  - PASS 2 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 2 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
