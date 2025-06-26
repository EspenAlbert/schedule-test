# ldapverify/TestAccLDAPVerify_basic Test Details
# Found 39 TestRuns in dev, qa from 2025-05-28 to 2025-06-26 from master branch: 1 unique tests, PASS(x 38) FAIL
Success rate: 97.44%

## Timeline
2025-05-27: MISSING
### 2025-05-28
#### PASS 3 minutes
```
2025-05-28T01:02:44.8984034Z === RUN   TestAccLDAPVerify_basic
2025-05-28T01:02:44.8984696Z --- PASS: TestAccLDAPVerify_basic (182.64s)
```
#### PASS 3 minutes
```
2025-05-28T09:00:12.2244717Z === RUN   TestAccLDAPVerify_basic
2025-05-28T09:00:12.2245358Z --- PASS: TestAccLDAPVerify_basic (183.17s)
```
### 2025-05-29
#### PASS 3 minutes
```
2025-05-29T00:57:40.5098170Z === RUN   TestAccLDAPVerify_basic
2025-05-29T00:57:40.5098656Z --- PASS: TestAccLDAPVerify_basic (182.06s)
```
### 2025-05-30
#### PASS 3 minutes
```
2025-05-30T00:59:28.9127307Z === RUN   TestAccLDAPVerify_basic
2025-05-30T00:59:28.9127990Z --- PASS: TestAccLDAPVerify_basic (182.84s)
```
### 2025-05-31
#### PASS 3 minutes
```
2025-05-31T00:58:30.3941974Z === RUN   TestAccLDAPVerify_basic
2025-05-31T00:58:30.3942440Z --- PASS: TestAccLDAPVerify_basic (183.42s)
```
### 2025-06-01
#### PASS 3 minutes
```
2025-06-01T01:02:36.5222093Z === RUN   TestAccLDAPVerify_basic
2025-06-01T01:02:36.5222570Z --- PASS: TestAccLDAPVerify_basic (183.53s)
```
#### PASS 3 minutes
```
2025-06-01T05:10:45.0163117Z === RUN   TestAccLDAPVerify_basic
2025-06-01T05:10:45.0163519Z --- PASS: TestAccLDAPVerify_basic (182.17s)
```
#### PASS 3 minutes
```
2025-06-01T09:20:12.7002827Z === RUN   TestAccLDAPVerify_basic
2025-06-01T09:20:12.7003486Z --- PASS: TestAccLDAPVerify_basic (181.91s)
```
#### PASS 3 minutes
```
2025-06-01T13:30:09.4359411Z === RUN   TestAccLDAPVerify_basic
2025-06-01T13:30:09.4359929Z --- PASS: TestAccLDAPVerify_basic (181.94s)
```
#### PASS 3 minutes
```
2025-06-01T17:37:11.2703421Z === RUN   TestAccLDAPVerify_basic
2025-06-01T17:37:11.2703955Z --- PASS: TestAccLDAPVerify_basic (182.06s)
```
#### PASS 3 minutes
```
2025-06-01T21:46:44.9995779Z === RUN   TestAccLDAPVerify_basic
2025-06-01T21:46:44.9996455Z --- PASS: TestAccLDAPVerify_basic (183.34s)
```
### 2025-06-02
#### PASS 3 minutes
```
2025-06-02T01:01:50.3290533Z === RUN   TestAccLDAPVerify_basic
2025-06-02T01:01:50.3290994Z --- PASS: TestAccLDAPVerify_basic (183.11s)
```
#### PASS 3 minutes
```
2025-06-02T01:57:33.5982388Z === RUN   TestAccLDAPVerify_basic
2025-06-02T01:57:33.5983052Z --- PASS: TestAccLDAPVerify_basic (182.04s)
```
#### PASS 3 minutes
```
2025-06-02T06:12:31.7247102Z === RUN   TestAccLDAPVerify_basic
2025-06-02T06:12:31.7247889Z --- PASS: TestAccLDAPVerify_basic (183.67s)
```
### 2025-06-03
#### PASS 3 minutes
```
2025-06-03T01:00:19.4590471Z === RUN   TestAccLDAPVerify_basic
2025-06-03T01:00:19.4591152Z --- PASS: TestAccLDAPVerify_basic (182.09s)
```
### 2025-06-04
#### PASS 3 minutes
```
2025-06-04T00:51:06.7152940Z === RUN   TestAccLDAPVerify_basic
2025-06-04T00:51:06.7153661Z --- PASS: TestAccLDAPVerify_basic (181.75s)
```
### 2025-06-05
#### FAIL 3 minutes
```
2025-06-05T00:38:18.0673007Z === RUN   TestAccLDAPVerify_basic
2025-06-05T00:38:18.0673656Z     resource_ldap_verify_test.go:22: Creating execution cluster: test-acc-tf-c-4539374361022603642
2025-06-05T00:38:18.0674257Z 2025/06/05 00:31:46 [DEBUG] Waiting for state to become: [IDLE]
2025-06-05T00:38:18.0674737Z     resource_ldap_verify_test.go:22: 
2025-06-05T00:38:18.0675752Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2025-06-05T00:38:18.0677622Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:112
2025-06-05T00:38:18.0679621Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/ldapverify/resource_ldap_verify_test.go:68
2025-06-05T00:38:18.0681671Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/ldapverify/resource_ldap_verify_test.go:22
2025-06-05T00:38:18.0682739Z         	Error:      	Received unexpected error:
2025-06-05T00:38:18.0685301Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4b9c939f274132504a2/clusters/test-acc-tf-c-4539374361022603642 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:38:18.0686591Z         	Test:       	TestAccLDAPVerify_basic
2025-06-05T00:38:18.0688749Z         	Messages:   	Cluster creation failed: test-acc-tf-c-4539374361022603642, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4b9c939f274132504a2/clusters/test-acc-tf-c-4539374361022603642 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:38:18.0690188Z --- FAIL: TestAccLDAPVerify_basic (180.75s)
```
### 2025-06-06
#### PASS 3 minutes
```
2025-06-06T00:52:40.1095610Z === RUN   TestAccLDAPVerify_basic
2025-06-06T00:52:40.1096215Z --- PASS: TestAccLDAPVerify_basic (182.03s)
```
### 2025-06-07
#### PASS 3 minutes
```
2025-06-07T00:50:13.5478677Z === RUN   TestAccLDAPVerify_basic
2025-06-07T00:50:13.5479344Z --- PASS: TestAccLDAPVerify_basic (182.09s)
```
### 2025-06-08
#### PASS 3 minutes
```
2025-06-08T00:54:05.0990407Z === RUN   TestAccLDAPVerify_basic
2025-06-08T00:54:05.0991109Z --- PASS: TestAccLDAPVerify_basic (181.55s)
```
### 2025-06-09
#### PASS 3 minutes
```
2025-06-09T00:52:04.4273735Z === RUN   TestAccLDAPVerify_basic
2025-06-09T00:52:04.4274396Z --- PASS: TestAccLDAPVerify_basic (183.61s)
```
### 2025-06-10
#### PASS 3 minutes
```
2025-06-10T01:02:56.2198211Z === RUN   TestAccLDAPVerify_basic
2025-06-10T01:02:56.2198629Z --- PASS: TestAccLDAPVerify_basic (183.24s)
```
### 2025-06-11
#### PASS 3 minutes
```
2025-06-11T00:50:04.8259494Z === RUN   TestAccLDAPVerify_basic
2025-06-11T00:50:04.8260042Z --- PASS: TestAccLDAPVerify_basic (181.90s)
```
#### PASS 3 minutes
```
2025-06-11T08:00:12.2446106Z === RUN   TestAccLDAPVerify_basic
2025-06-11T08:00:12.2446736Z --- PASS: TestAccLDAPVerify_basic (181.70s)
```
### 2025-06-12
#### PASS 3 minutes
```
2025-06-12T00:49:00.2529193Z === RUN   TestAccLDAPVerify_basic
2025-06-12T00:49:00.2529921Z --- PASS: TestAccLDAPVerify_basic (183.47s)
```
### 2025-06-13
#### PASS 3 minutes
```
2025-06-13T00:49:53.4066332Z === RUN   TestAccLDAPVerify_basic
2025-06-13T00:49:53.4066752Z --- PASS: TestAccLDAPVerify_basic (182.08s)
```
### 2025-06-14
#### PASS 3 minutes
```
2025-06-14T00:52:07.3841400Z === RUN   TestAccLDAPVerify_basic
2025-06-14T00:52:07.3842005Z --- PASS: TestAccLDAPVerify_basic (182.24s)
```
### 2025-06-15
#### PASS 3 minutes
```
2025-06-15T00:54:39.9559536Z === RUN   TestAccLDAPVerify_basic
2025-06-15T00:54:39.9560007Z --- PASS: TestAccLDAPVerify_basic (183.28s)
```
### 2025-06-16
#### PASS 3 minutes
```
2025-06-16T00:52:04.5420359Z === RUN   TestAccLDAPVerify_basic
2025-06-16T00:52:04.5420923Z --- PASS: TestAccLDAPVerify_basic (181.92s)
```
### 2025-06-17
#### PASS 3 minutes
```
2025-06-17T00:51:15.5091811Z === RUN   TestAccLDAPVerify_basic
2025-06-17T00:51:15.5092401Z --- PASS: TestAccLDAPVerify_basic (183.62s)
```
### 2025-06-18
#### PASS 3 minutes
```
2025-06-18T00:49:39.4279232Z === RUN   TestAccLDAPVerify_basic
2025-06-18T00:49:39.4279898Z --- PASS: TestAccLDAPVerify_basic (183.61s)
```
### 2025-06-19
#### PASS 3 minutes
```
2025-06-19T00:51:55.0595263Z === RUN   TestAccLDAPVerify_basic
2025-06-19T00:51:55.0595645Z --- PASS: TestAccLDAPVerify_basic (181.78s)
```
### 2025-06-20
#### PASS 3 minutes
```
2025-06-20T00:50:55.5811670Z === RUN   TestAccLDAPVerify_basic
2025-06-20T00:50:55.5812178Z --- PASS: TestAccLDAPVerify_basic (183.53s)
```
### 2025-06-21
#### PASS 3 minutes
```
2025-06-21T00:50:04.2798887Z === RUN   TestAccLDAPVerify_basic
2025-06-21T00:50:04.2799265Z --- PASS: TestAccLDAPVerify_basic (183.08s)
```
### 2025-06-22
#### PASS 3 minutes
```
2025-06-22T00:54:53.6830556Z === RUN   TestAccLDAPVerify_basic
2025-06-22T00:54:53.6831163Z --- PASS: TestAccLDAPVerify_basic (182.99s)
```
### 2025-06-23
#### PASS 3 minutes
```
2025-06-23T00:51:54.0901217Z === RUN   TestAccLDAPVerify_basic
2025-06-23T00:51:54.0901851Z --- PASS: TestAccLDAPVerify_basic (183.55s)
```
### 2025-06-24
#### PASS 3 minutes
```
2025-06-24T00:50:33.4278143Z === RUN   TestAccLDAPVerify_basic
2025-06-24T00:50:33.4278824Z --- PASS: TestAccLDAPVerify_basic (182.58s)
```
### 2025-06-25
#### PASS 3 minutes
```
2025-06-25T00:51:43.4896595Z === RUN   TestAccLDAPVerify_basic
2025-06-25T00:51:43.4897248Z --- PASS: TestAccLDAPVerify_basic (181.72s)
```
### 2025-06-26
#### PASS 3 minutes
```
2025-06-26T00:50:42.4120771Z === RUN   TestAccLDAPVerify_basic
2025-06-26T00:50:42.4121914Z --- PASS: TestAccLDAPVerify_basic (182.21s)
```