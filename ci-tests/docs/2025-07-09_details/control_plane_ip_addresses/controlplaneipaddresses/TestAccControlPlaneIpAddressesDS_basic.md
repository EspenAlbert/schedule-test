# control_plane_ip_addresses/controlplaneipaddresses/TestAccControlPlaneIpAddressesDS_basic Test Details
# Found 113 TestRuns in dev, qa from 2025-04-11 to 2025-07-09 from master branch: 1 unique tests, PASS(x 112) FAIL
Success rate: 99.12%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-11 00:29 | qa | 0.06s

## Timeline
2025-03-11: MISSING
2025-03-12: MISSING
2025-03-13: MISSING
2025-03-14: MISSING
2025-03-15: MISSING
2025-03-16: MISSING
2025-03-17: MISSING
2025-03-18: MISSING
2025-03-19: MISSING
2025-03-20: MISSING
2025-03-21: MISSING
2025-03-22: MISSING
2025-03-23: MISSING
2025-03-24: MISSING
2025-03-25: MISSING
2025-03-26: MISSING
2025-03-27: MISSING
2025-03-28: MISSING
2025-03-29: MISSING
2025-03-30: MISSING
2025-03-31: MISSING
2025-04-01: MISSING
2025-04-02: MISSING
2025-04-03: MISSING
2025-04-04: MISSING
2025-04-05: MISSING
2025-04-06: MISSING
2025-04-07: MISSING
2025-04-08: MISSING
2025-04-09: MISSING
2025-04-10: MISSING
### 2025-04-11
#### PASS a second
### 2025-04-12
#### PASS a second
### 2025-04-13
#### PASS a second
### 2025-04-14
#### PASS a second
### 2025-04-15
#### PASS a second
### 2025-04-16
#### PASS a moment
#### PASS a second
### 2025-04-17
#### PASS a moment
### 2025-04-18
#### PASS a second
### 2025-04-19
#### PASS a moment
### 2025-04-20
#### PASS a moment
### 2025-04-21
#### PASS a moment
### 2025-04-22
#### PASS a moment
### 2025-04-23
#### PASS a second
### 2025-04-24
#### PASS a second
### 2025-04-25
#### PASS a moment
### 2025-04-26
#### PASS a moment
### 2025-04-27
#### PASS a second
### 2025-04-28
#### PASS a second
### 2025-04-29
#### PASS a second
### 2025-04-30
#### PASS a second
#### PASS a second
### 2025-05-01
#### PASS a second
#### PASS a second
#### PASS a moment
#### PASS a moment
#### PASS a second
#### PASS a moment
#### PASS a second
### 2025-05-02
#### PASS a second
### 2025-05-03
#### PASS a second
### 2025-05-04
#### PASS a second
### 2025-05-05
#### PASS a moment
### 2025-05-06
#### PASS a second
### 2025-05-07
#### PASS a second
### 2025-05-08
#### PASS a second
### 2025-05-09
#### PASS a second
### 2025-05-10
#### PASS a moment
### 2025-05-11
#### FAIL a moment
```
2025-05-11T00:29:48.5112011Z === RUN   TestAccControlPlaneIpAddressesDS_basic
2025-05-11T00:29:48.5116263Z === CONT  TestAccControlPlaneIpAddressesDS_basic
2025-05-11T00:29:49.0720347Z    test_name=TestAccControlPlaneIpAddressesDS_basic test_terraform_path=/home/runner/work/_temp/31f560e8-12e7-4462-9ece-4e7baee00ed1/terraform test_working_directory=/tmp/plugintest1575567718
2025-05-11T00:29:49.0722388Z     data_source_test.go:12: Step 1/1 error: Error running pre-apply plan: exit status 1
2025-05-11T00:29:49.0723107Z         
2025-05-11T00:29:49.0723748Z         Error: error fetching control plane ip addresses
2025-05-11T00:29:49.0724266Z         
2025-05-11T00:29:49.0724792Z           with data.mongodbatlas_control_plane_ip_addresses.test,
2025-05-11T00:29:49.0725644Z           on terraform_plugin_test.tf line 12, in data "mongodbatlas_control_plane_ip_addresses" "test":
2025-05-11T00:29:49.0727083Z           12: data "mongodbatlas_control_plane_ip_addresses" "test" {
2025-05-11T00:29:49.0727587Z         
2025-05-11T00:29:49.0728460Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-05-11T00:29:49.0729183Z         type
2025-05-11T00:29:49.0983805Z --- FAIL: TestAccControlPlaneIpAddressesDS_basic (0.59s)
```
### 2025-05-12
#### PASS a second
### 2025-05-13
#### PASS a moment
#### PASS a second
### 2025-05-14
#### PASS a moment
### 2025-05-15
#### PASS a moment
### 2025-05-16
#### PASS a moment
### 2025-05-17
#### PASS a second
### 2025-05-18
#### PASS a second
### 2025-05-19
#### PASS a second
### 2025-05-20
#### PASS a second
### 2025-05-21
#### PASS a moment
### 2025-05-22
#### PASS a second
### 2025-05-23
#### PASS a moment
### 2025-05-24
#### PASS a moment
### 2025-05-25
#### PASS a second
### 2025-05-26
#### PASS a second
### 2025-05-27
#### PASS a second
### 2025-05-28
#### PASS a moment
#### PASS a second
### 2025-05-29
#### PASS a moment
### 2025-05-30
#### PASS a moment
### 2025-05-31
#### PASS a moment
### 2025-06-01
#### PASS a moment
#### PASS a moment
#### PASS a moment
#### PASS a second
#### PASS a moment
#### PASS a moment
### 2025-06-02
#### PASS a second
#### PASS a second
#### PASS a moment
### 2025-06-03
#### PASS a moment
### 2025-06-04
#### PASS a moment
### 2025-06-05
#### PASS a moment
### 2025-06-06
#### PASS a second
### 2025-06-07
#### PASS a moment
### 2025-06-08
#### PASS a second
### 2025-06-09
#### PASS a second
### 2025-06-10
#### PASS a moment
### 2025-06-11
#### PASS a second
#### PASS a second
### 2025-06-12
#### PASS a moment
### 2025-06-13
#### PASS a second
### 2025-06-14
#### PASS a moment
### 2025-06-15
#### PASS a moment
### 2025-06-16
#### PASS a second
### 2025-06-17
#### PASS a moment
### 2025-06-18
#### PASS a moment
### 2025-06-19
#### PASS a moment
### 2025-06-20
#### PASS a second
### 2025-06-21
#### PASS a second
### 2025-06-22
#### PASS a second
### 2025-06-23
#### PASS a moment
### 2025-06-24
#### PASS a moment
### 2025-06-25
#### PASS a second
### 2025-06-26
#### PASS a moment
### 2025-06-27
#### PASS a moment
### 2025-06-28
#### PASS a moment
### 2025-06-29
#### PASS a second
### 2025-06-30
#### PASS a second
### 2025-07-01
#### PASS a second
#### PASS a moment
#### PASS a moment
#### PASS a moment
#### PASS a moment
#### PASS a second
### 2025-07-02
#### PASS a second
### 2025-07-03
#### PASS a moment
### 2025-07-04
#### PASS 2 seconds
### 2025-07-05
#### PASS a moment
### 2025-07-06
#### PASS a second
### 2025-07-07
#### PASS a moment
### 2025-07-08
#### PASS a moment
### 2025-07-09
#### PASS a moment