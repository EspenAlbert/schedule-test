# ldap/ldapverify/TestAccLDAPVerify_basic Test Details
# Found 33 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 24) FAIL(x 9)
Success rate: 72.73%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:51](#error-2026-07-09t0051340000) |  | dev | flaky_500 | 62.05s
[2026-07-10 01:24](#error-2026-07-10t0124090000) | LDAP_HOSTNAME_NOT_ALLOWED /api/atlas/v2/groups/6a5041a1e2b992f4d13ada3e/userSecurity/ldap/verify | dev |  | 0.04s
[2026-07-11 00:59](#error-2026-07-11t0059160000) | LDAP_HOSTNAME_NOT_ALLOWED /api/atlas/v2/groups/6a51919f8329995c4c765b35/userSecurity/ldap/verify | dev |  | 820.04s
[2026-07-13 01:03](#error-2026-07-13t0103270000) | LDAP_HOSTNAME_NOT_ALLOWED /api/atlas/v2/groups/6a54356da3b75f3f044928b7/userSecurity/ldap/verify | dev |  | 0.04s
[2026-07-14 00:57](#error-2026-07-14t0057060000) | LDAP_HOSTNAME_NOT_ALLOWED /api/atlas/v2/groups/6a5585a***f430f45f9ceeca/userSecurity/ldap/verify | dev |  | 812.07s
[2026-07-21 01:02](#error-2026-07-21t0102510000) |  | dev | flaky_500 | 39.03s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:51:34+00:00
```
2026-07-09T00:51:34.2105016Z === RUN   TestAccLDAPVerify_basic
2026-07-09T00:51:34.2105917Z     resource_ldap_verify_test.go:22: Creating execution project (1): test-acc-tf-p-1241938545585790483
2026-07-09T00:51:34.2106729Z     resource_ldap_verify_test.go:22: 
2026-07-09T00:51:34.2107901Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:51:34.2109866Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:51:34.2111920Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:51:34.2113776Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-07-09T00:51:34.2115854Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/ldapverify/resource_ldap_verify_test.go:68
2026-07-09T00:51:34.2118046Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/ldapverify/resource_ldap_verify_test.go:22
2026-07-09T00:51:34.2119046Z         	Error:      	Received unexpected error:
2026-07-09T00:51:34.2120320Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2026-07-09T00:51:34.2121278Z         	Test:       	TestAccLDAPVerify_basic
2026-07-09T00:51:34.2122573Z         	Messages:   	Project creation failed: test-acc-tf-p-1241938545585790483, err: (503 Service Unavailable) failed to decode response body: undefined response type
2026-07-09T00:51:34.2123651Z --- FAIL: TestAccLDAPVerify_basic (62.47s)
```

- 2026-07-10

### Error 2026-07-10T01:24:09+00:00
```
2026-07-10T01:24:09.8311106Z === RUN   TestAccLDAPVerify_basic
2026-07-10T01:24:09.8326116Z    test_step_number=1
2026-07-10T01:24:09.8326721Z     resource_ldap_verify_test.go:22: Step 1/2 error: Error running apply: exit status 1
2026-07-10T01:24:09.8327264Z         
2026-07-10T01:24:09.8329815Z         Error: error creating MongoDB LDAPVerify (6a5041a1e2b992f4d13ada3e): https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a5041a1e2b992f4d13ada3e/userSecurity/ldap/verify POST: HTTP 400 Bad Request (Error code: "LDAP_HOSTNAME_NOT_ALLOWED") Detail: The LDAP hostname *** is not allowed. Reason: Bad Request. Params: [***], BadRequestDetail: 
2026-07-10T01:24:09.8331232Z         
2026-07-10T01:24:09.8331654Z           with mongodbatlas_ldap_verify.test,
2026-07-10T01:24:09.8332425Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_ldap_verify" "test":
2026-07-10T01:24:09.8333145Z           12: 		resource "mongodbatlas_ldap_verify" "test" {
2026-07-10T01:24:09.8333888Z         
2026-07-10T01:24:09.8334238Z --- FAIL: TestAccLDAPVerify_basic (0.42s)
```

- 2026-07-11

### Error 2026-07-11T00:59:16+00:00
```
2026-07-11T00:59:16.7320027Z === RUN   TestAccLDAPVerify_basic
2026-07-11T00:59:16.7321380Z     resource_ldap_verify_test.go:22: Creating execution project (1): test-acc-tf-p-5225823042794766331
2026-07-11T00:59:16.7322955Z     resource_ldap_verify_test.go:22: Creating execution cluster: test-acc-tf-c-3371925127567144734
2026-07-11T00:59:16.7324073Z 2026/07/11 00:43:17 [DEBUG] Waiting for state to become: [IDLE]
2026-07-11T00:59:16.7325025Z 2026/07/11 00:46:19 [TRACE] Waiting 1m0s before next try
2026-07-11T00:59:16.7325854Z 2026/07/11 00:47:19 [TRACE] Waiting 10s before next try
2026-07-11T00:59:16.7326656Z 2026/07/11 00:47:30 [TRACE] Waiting 1m0s before next try
2026-07-11T00:59:16.7327464Z 2026/07/11 00:48:31 [TRACE] Waiting 10s before next try
2026-07-11T00:59:16.7328302Z 2026/07/11 00:48:42 [TRACE] Waiting 1m0s before next try
2026-07-11T00:59:16.7329108Z 2026/07/11 00:49:43 [TRACE] Waiting 10s before next try
2026-07-11T00:59:16.7330121Z 2026/07/11 00:49:53 [TRACE] Waiting 1m0s before next try
2026-07-11T00:59:16.7330922Z 2026/07/11 00:50:54 [TRACE] Waiting 10s before next try
2026-07-11T00:59:16.7331709Z 2026/07/11 00:51:05 [TRACE] Waiting 1m0s before next try
2026-07-11T00:59:16.7332503Z 2026/07/11 00:52:06 [TRACE] Waiting 10s before next try
2026-07-11T00:59:16.7333277Z 2026/07/11 00:52:16 [TRACE] Waiting 1m0s before next try
2026-07-11T00:59:16.7334061Z 2026/07/11 00:53:17 [TRACE] Waiting 10s before next try
2026-07-11T00:59:16.7334842Z 2026/07/11 00:53:28 [TRACE] Waiting 1m0s before next try
2026-07-11T00:59:16.7335629Z 2026/07/11 00:54:29 [TRACE] Waiting 10s before next try
2026-07-11T00:59:16.7336404Z 2026/07/11 00:54:40 [TRACE] Waiting 1m0s before next try
2026-07-11T00:59:16.7337190Z 2026/07/11 00:55:40 [TRACE] Waiting 10s before next try
2026-07-11T00:59:16.7337982Z 2026/07/11 00:55:50 [TRACE] Waiting 1m0s before next try
2026-07-11T00:59:16.7362974Z    test_terraform_path=/home/runner/work/_temp/ad6a4e16-30a9-4d43-99a2-74097bfe4d4e/terraform test_working_directory=/tmp/plugintest3608213136 test_step_number=1
2026-07-11T00:59:16.7364840Z     resource_ldap_verify_test.go:22: Step 1/2 error: Error running apply: exit status 1
2026-07-11T00:59:16.7365978Z         
2026-07-11T00:59:16.7370735Z         Error: error creating MongoDB LDAPVerify (6a51919f8329995c4c765b35): https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a51919f8329995c4c765b35/userSecurity/ldap/verify POST: HTTP 400 Bad Request (Error code: "LDAP_HOSTNAME_NOT_ALLOWED") Detail: The LDAP hostname *** is not allowed. Reason: Bad Request. Params: [***], BadRequestDetail: 
2026-07-11T00:59:16.7373212Z         
2026-07-11T00:59:16.7373937Z           with mongodbatlas_ldap_verify.test,
2026-07-11T00:59:16.7375277Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_ldap_verify" "test":
2026-07-11T00:59:16.7376507Z           12: 		resource "mongodbatlas_ldap_verify" "test" {
2026-07-11T00:59:16.7377226Z         
2026-07-11T00:59:16.7377782Z --- FAIL: TestAccLDAPVerify_basic (820.39s)
```

- 2026-07-12: MISSING
- 2026-07-13

### Error 2026-07-13T01:03:27+00:00
```
2026-07-13T01:03:27.6296935Z === RUN   TestAccLDAPVerify_basic
2026-07-13T01:03:27.6319378Z    test_name=TestAccLDAPVerify_basic test_terraform_path=/home/runner/work/_temp/f4d1d92a-f1f1-42ae-888b-a4f1ba0bd27e/terraform
2026-07-13T01:03:27.6320858Z     resource_ldap_verify_test.go:22: Step 1/2 error: Error running apply: exit status 1
2026-07-13T01:03:27.6321682Z         
2026-07-13T01:03:27.6326065Z         Error: error creating MongoDB LDAPVerify (6a54356da3b75f3f044928b7): https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a54356da3b75f3f044928b7/userSecurity/ldap/verify POST: HTTP 400 Bad Request (Error code: "LDAP_HOSTNAME_NOT_ALLOWED") Detail: The LDAP hostname *** is not allowed. Reason: Bad Request. Params: [***], BadRequestDetail: 
2026-07-13T01:03:27.6328346Z         
2026-07-13T01:03:27.6328998Z           with mongodbatlas_ldap_verify.test,
2026-07-13T01:03:27.6330215Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_ldap_verify" "test":
2026-07-13T01:03:27.6331333Z           12: 		resource "mongodbatlas_ldap_verify" "test" {
2026-07-13T01:03:27.6331982Z         
2026-07-13T01:03:27.6332480Z --- FAIL: TestAccLDAPVerify_basic (0.43s)
```

- 2026-07-14

### Error 2026-07-14T00:57:06+00:00
```
2026-07-14T00:57:06.1573269Z === RUN   TestAccLDAPVerify_basic
2026-07-14T00:57:06.1574396Z     resource_ldap_verify_test.go:22: Creating execution project (1): test-acc-tf-p-3080495680256012607
2026-07-14T00:57:06.1576142Z     resource_ldap_verify_test.go:22: Creating execution cluster: test-acc-tf-c-4580916161221364930
2026-07-14T00:57:06.1577039Z 2026/07/14 00:41:16 [DEBUG] Waiting for state to become: [IDLE]
2026-07-14T00:57:06.1577714Z 2026/07/14 00:44:16 [TRACE] Waiting 1m0s before next try
2026-07-14T00:57:06.1578348Z 2026/07/14 00:45:17 [TRACE] Waiting 10s before next try
2026-07-14T00:57:06.1578967Z 2026/07/14 00:45:27 [TRACE] Waiting 1m0s before next try
2026-07-14T00:57:06.1579591Z 2026/07/14 00:46:27 [TRACE] Waiting 10s before next try
2026-07-14T00:57:06.1580192Z 2026/07/14 00:46:38 [TRACE] Waiting 1m0s before next try
2026-07-14T00:57:06.1580805Z 2026/07/14 00:47:38 [TRACE] Waiting 10s before next try
2026-07-14T00:57:06.1581431Z 2026/07/14 00:47:48 [TRACE] Waiting 1m0s before next try
2026-07-14T00:57:06.1582503Z 2026/07/14 00:48:49 [TRACE] Waiting 10s before next try
2026-07-14T00:57:06.1583121Z 2026/07/14 00:48:59 [TRACE] Waiting 1m0s before next try
2026-07-14T00:57:06.1583730Z 2026/07/14 00:49:59 [TRACE] Waiting 10s before next try
2026-07-14T00:57:06.1584327Z 2026/07/14 00:50:10 [TRACE] Waiting 1m0s before next try
2026-07-14T00:57:06.1584929Z 2026/07/14 00:51:10 [TRACE] Waiting 10s before next try
2026-07-14T00:57:06.1585776Z 2026/07/14 00:51:20 [TRACE] Waiting 1m0s before next try
2026-07-14T00:57:06.1586383Z 2026/07/14 00:52:21 [TRACE] Waiting 10s before next try
2026-07-14T00:57:06.1586977Z 2026/07/14 00:52:31 [TRACE] Waiting 1m0s before next try
2026-07-14T00:57:06.1587513Z 2026/07/14 00:53:31 [TRACE] Waiting 10s before next try
2026-07-14T00:57:06.1587971Z 2026/07/14 00:53:41 [TRACE] Waiting 1m0s before next try
2026-07-14T00:57:06.1606039Z   
2026-07-14T00:57:06.1607021Z     resource_ldap_verify_test.go:22: Step 1/2 error: Error running apply: exit status 1
2026-07-14T00:57:06.1607963Z         
2026-07-14T00:57:06.1612159Z         Error: error creating MongoDB LDAPVerify (6a5585a***f430f45f9ceeca): https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a5585a***f430f45f9ceeca/userSecurity/ldap/verify POST: HTTP 400 Bad Request (Error code: "LDAP_HOSTNAME_NOT_ALLOWED") Detail: The LDAP hostname *** is not allowed. Reason: Bad Request. Params: [***], BadRequestDetail: 
2026-07-14T00:57:06.1613638Z         
2026-07-14T00:57:06.1614062Z           with mongodbatlas_ldap_verify.test,
2026-07-14T00:57:06.1614845Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_ldap_verify" "test":
2026-07-14T00:57:06.1615905Z           12: 		resource "mongodbatlas_ldap_verify" "test" {
2026-07-14T00:57:06.1616346Z         
2026-07-14T00:57:06.1616684Z --- FAIL: TestAccLDAPVerify_basic (812.73s)
```

- 2026-07-15 PASS 3 minutes
- 2026-07-16 PASS 45 minutes
- 2026-07-17 PASS 3 minutes
- 2026-07-18 PASS 15 minutes
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T01:02:51+00:00
```
2026-07-21T01:02:51.1937760Z === RUN   TestAccLDAPVerify_basic
2026-07-21T01:02:51.1938879Z     resource_ldap_verify_test.go:22: Creating execution project (1): test-acc-tf-p-5512538074567924895
2026-07-21T01:02:51.1939864Z     resource_ldap_verify_test.go:22: 
2026-07-21T01:02:51.1941519Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T01:02:51.1944621Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T01:02:51.1947858Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T01:02:51.1950983Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-07-21T01:02:51.1954325Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/ldapverify/resource_ldap_verify_test.go:68
2026-07-21T01:02:51.1957900Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/ldapverify/resource_ldap_verify_test.go:22
2026-07-21T01:02:51.1959367Z         	Error:      	Received unexpected error:
2026-07-21T01:02:51.1960996Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2026-07-21T01:02:51.1962023Z         	Test:       	TestAccLDAPVerify_basic
2026-07-21T01:02:51.1963873Z         	Messages:   	Project creation failed: test-acc-tf-p-5512538074567924895, err: (503 Service Unavailable) failed to decode response body: undefined response type
2026-07-21T01:02:51.1965385Z --- FAIL: TestAccLDAPVerify_basic (39.35s)
```

- 2026-07-22 PASS 3 minutes
- 2026-07-23 PASS 48 minutes
- 2026-07-24 PASS 3 minutes
- 2026-07-25 PASS 16 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS 3 minutes
- 2026-07-28 PASS 28 minutes
- 2026-07-29 PASS 3 minutes
- 2026-07-30 PASS 56 minutes
- 2026-07-31 PASS 3 minutes
- 2026-08-01 PASS 15 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 3 minutes
- 2026-08-04 PASS 16 minutes
- 2026-08-05 PASS 3 minutes
- 2026-08-06 PASS 16 minutes
- 2026-08-07 PASS 3 minutes

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-07-12 01:06](#error-2026-07-12t0106030000) | LDAP_HOSTNAME_NOT_ALLOWED /api/atlas/v2/groups/6a52e45354924de0baf4a912/userSecurity/ldap/verify | qa | 0.04s
[2026-07-15 07:40](#error-2026-07-15t0740130000) | LDAP_HOSTNAME_NOT_ALLOWED /api/atlas/v2/groups/6a57358293daee1cb09fd430/userSecurity/ldap/verify | qa | 0.05s
[2026-07-15 09:47](#error-2026-07-15t0947540000) | LDAP_HOSTNAME_NOT_ALLOWED /api/atlas/v2/groups/6a5753ae8f62f9b412918db2/userSecurity/ldap/verify | qa | 0.04s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12

### Error 2026-07-12T01:06:03+00:00
```
2026-07-12T01:06:03.5262466Z === RUN   TestAccLDAPVerify_basic
2026-07-12T01:06:03.5290242Z   
2026-07-12T01:06:03.5291262Z     resource_ldap_verify_test.go:22: Step 1/2 error: Error running apply: exit status 1
2026-07-12T01:06:03.5292244Z         
2026-07-12T01:06:03.5297227Z         Error: error creating MongoDB LDAPVerify (6a52e45354924de0baf4a912): https://cloud-qa.mongodb.com/api/atlas/v2/groups/6a52e45354924de0baf4a912/userSecurity/ldap/verify POST: HTTP 400 Bad Request (Error code: "LDAP_HOSTNAME_NOT_ALLOWED") Detail: The LDAP hostname *** is not allowed. Reason: Bad Request. Params: [***], BadRequestDetail: 
2026-07-12T01:06:03.5299863Z         
2026-07-12T01:06:03.5300617Z           with mongodbatlas_ldap_verify.test,
2026-07-12T01:06:03.5302020Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_ldap_verify" "test":
2026-07-12T01:06:03.5303597Z           12: 		resource "mongodbatlas_ldap_verify" "test" {
2026-07-12T01:06:03.5304383Z         
2026-07-12T01:06:03.5304951Z --- FAIL: TestAccLDAPVerify_basic (0.45s)
```

- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15
  - FAIL a moment

### Error 2026-07-15T07:40:13+00:00
```
2026-07-15T07:40:13.7864607Z === RUN   TestAccLDAPVerify_basic
2026-07-15T07:40:13.7884917Z   
2026-07-15T07:40:13.7885835Z     resource_ldap_verify_test.go:22: Step 1/2 error: Error running apply: exit status 1
2026-07-15T07:40:13.7886585Z         
2026-07-15T07:40:13.7890060Z         Error: error creating MongoDB LDAPVerify (6a57358293daee1cb09fd430): https://cloud-qa.mongodb.com/api/atlas/v2/groups/6a57358293daee1cb09fd430/userSecurity/ldap/verify POST: HTTP 400 Bad Request (Error code: "LDAP_HOSTNAME_NOT_ALLOWED") Detail: The LDAP hostname *** is not allowed. Reason: Bad Request. Params: [***], BadRequestDetail: 
2026-07-15T07:40:13.7892156Z         
2026-07-15T07:40:13.7892777Z           with mongodbatlas_ldap_verify.test,
2026-07-15T07:40:13.7893841Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_ldap_verify" "test":
2026-07-15T07:40:13.7894878Z           12: 		resource "mongodbatlas_ldap_verify" "test" {
2026-07-15T07:40:13.7895562Z         
2026-07-15T07:40:13.7896048Z --- FAIL: TestAccLDAPVerify_basic (0.50s)
```

  - FAIL a moment

### Error 2026-07-15T09:47:54+00:00
```
2026-07-15T09:47:54.5893108Z === RUN   TestAccLDAPVerify_basic
2026-07-15T09:47:54.5907038Z    test_terraform_path=/home/runner/work/_temp/29ea9546-50ab-4f02-a929-f792ea8ffe9c/terraform
2026-07-15T09:47:54.5907982Z     resource_ldap_verify_test.go:22: Step 1/2 error: Error running apply: exit status 1
2026-07-15T09:47:54.5908527Z         
2026-07-15T09:47:54.5911777Z         Error: error creating MongoDB LDAPVerify (6a5753ae8f62f9b412918db2): https://cloud-qa.mongodb.com/api/atlas/v2/groups/6a5753ae8f62f9b412918db2/userSecurity/ldap/verify POST: HTTP 400 Bad Request (Error code: "LDAP_HOSTNAME_NOT_ALLOWED") Detail: The LDAP hostname *** is not allowed. Reason: Bad Request. Params: [***], BadRequestDetail: 
2026-07-15T09:47:54.5913164Z         
2026-07-15T09:47:54.5913594Z           with mongodbatlas_ldap_verify.test,
2026-07-15T09:47:54.5914361Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_ldap_verify" "test":
2026-07-15T09:47:54.5915086Z           12: 		resource "mongodbatlas_ldap_verify" "test" {
2026-07-15T09:47:54.5915509Z         
2026-07-15T09:47:54.5915847Z --- FAIL: TestAccLDAPVerify_basic (0.45s)
```

- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 3 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 3 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 16 minutes
  - PASS 3 minutes
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 3 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
